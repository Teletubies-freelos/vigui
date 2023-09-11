'use client';
import { Stack } from "@mui/material";
import { useMemo } from "react";
import CarouselHero from '../../layouts/carousel';

interface ResponsiveCarouselProps<T> {
  data: T[];
  itemRender: (item: T) => JSX.Element;
  groupSize?: number;
}

function groupBy<T>(items: T[], groupSize: number) {
  const HeroItemsGroup: T[][] = [];
  for (let i = 0; i < items.length; i += groupSize)
    HeroItemsGroup.push(items.slice(i, i + 3));

  return HeroItemsGroup;
}

export default function ResponsiveCarousel<T>({
  data,
  itemRender,
  groupSize = 3,
}: ResponsiveCarouselProps<T>) {
  const HeroItems = useMemo(() => data?.map(itemRender) ?? [], [data, itemRender]);

  const HeroItemsGroup = useMemo(
    () => groupBy(HeroItems ?? [], groupSize),
    [HeroItems, groupSize],
  );

  if(HeroItems.length === groupSize)
    return {HeroItemsGroup}

  return (
    <>
      <CarouselHero
        sx={{ display: { md: "block", xs: "none" }, paddingX: "1rem" }}
      >
        {HeroItemsGroup.map((items, index) => (
          <Stack gap={2} direction="row" key={items.length + index} justifyContent="center">
            {items}
          </Stack>
        ))}
      </CarouselHero>
      <CarouselHero sx={{ display: { md: "none", xs: "block" } }}>
        {HeroItems}
      </CarouselHero>
    </>
  );
}
