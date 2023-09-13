import { Card } from '@/components/card';
import { sxCardAnimation } from './styles';
import { classNameContent, classNameHeader } from './tokens';
import { CardHeader } from './card.header';
import { CardContent } from './card.content';
import { BuyButton } from './action.button';
import { Plan } from '@/types';

const sxStyles = sxCardAnimation()

interface CustomCardProps {
  item: Plan
}

export const CustomCard = ({ item }: CustomCardProps)=>{
  return (<Card
    variant='secondary'
    classNameHeader={classNameHeader}
    classNameContent={classNameContent}
    sxCard={{
      ...sxStyles,
      width: '18rem',
      margin: '0 auto',
      height: '30rem'
    }}
    header={
      <CardHeader meta={item.meta} price={item.price} speed={item.plan}/>
    }
    content={
      <CardContent benefits={item.benefits} button={<BuyButton />} />
    }
  />)
}
