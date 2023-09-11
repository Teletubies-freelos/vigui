import { ThemeRegistry } from "@/providers/theme";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="./vendors/woopra.js" />
      <Box component={'body'} sx={{background: 'white'}}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </Box>
    </html>
  );
}