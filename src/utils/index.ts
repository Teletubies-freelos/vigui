export function groupBy<T>(items: T[], groupSize: number) {
  const HeroItemsGroup: T[][] = [];
  for (let i = 0; i < items.length; i += groupSize)
    HeroItemsGroup.push(items.slice(i, i + groupSize));

  return HeroItemsGroup;
}
