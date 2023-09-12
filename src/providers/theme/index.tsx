'use client'
import { PropsWithChildren, useState } from "react";
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { defaultTheme } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ThemeRegistry = ({ children }: PropsWithChildren)=>{
  const [{ cache, flush }] = useState(() => {
    const innerCache = createCache({key: 'mui'});
    innerCache.compat = true;
    const prevInsert = innerCache.insert;
    let inserted: string[] = [];
    innerCache.insert = (...args: any) => {
      const serialized = args[1];
      if (innerCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      // @ts-ignore
      return prevInsert(...args);
    };
    const innerFlush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache: innerCache, flush: innerFlush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });


  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
