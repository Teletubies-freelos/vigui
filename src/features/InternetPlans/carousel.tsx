'use client';

import ResponsiveCarousel from "@/components/carousel";
import { CustomCard } from "@/components/customCard";
import { Plan } from "@/types";

const itemRender = (item: Plan) => (
  <CustomCard key={item.price} item={item}/>
);

interface PlansCarosuelProps{
  data: Plan[]
}

export const PlansCarosuel = ({ data }: PlansCarosuelProps)=>(
  <ResponsiveCarousel
    data={data}
    itemRender={itemRender}
    groupSize={3}
  />
)
