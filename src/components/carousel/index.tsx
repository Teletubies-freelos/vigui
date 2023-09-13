'use client';
import { Box, Stack } from '@mui/material';
import { useMemo } from 'react';
import CarouselHero from '../../layouts/carousel';
import { groupBy } from '@/utils';

interface ResponsiveCarouselProps<T> {
  data: T[];
  itemRender: (item: T) => JSX.Element;
  groupSize?: number;
}

/**
 *
 * For more information about this pattern look for render props pattern
 */
export default function ResponsiveCarousel<T>({
  data,
  itemRender,
  groupSize = 3,
}: ResponsiveCarouselProps<T>) {
  const HeroItems = useMemo(
    () => data?.map(itemRender) ?? [],
    [data, itemRender]
  );

  const HeroItemsGroup = useMemo(
    () => groupBy<JSX.Element>(HeroItems ?? [], groupSize),
    [HeroItems, groupSize]
  );

  return (
    <>
      {HeroItems.length === groupSize ? (
        <Box display={{ md: 'flex', xs: 'none', gap: '3rem' }} height='35rem'>
          {HeroItemsGroup}
        </Box>
      ) : (
        <CarouselHero
          sx={{ display: { md: 'block', xs: 'none' }, paddingX: '1rem' }}
        >
          {HeroItemsGroup.map((items, index) => (
            <Stack
              gap={2}
              direction='row'
              key={items.length + index}
              justifyContent='center'
            >
              {items}
            </Stack>
          ))}
        </CarouselHero>
      )}

      <CarouselHero sx={{ display: { md: 'none', xs: 'block' } }}>
        {HeroItems}
      </CarouselHero>
    </>
  );
}
