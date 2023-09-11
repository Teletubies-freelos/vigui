import { Nav } from '@/organisms/Nav'
import { BENEFITS } from '@/data/benefits'
import { REQUIREMENTS } from '@/data/requirements'
import Section from '@/components/sections/SectionRequirements'
import HeroVigui from '@/organisms/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <HeroVigui />
      <Section title='Beneficios' items={BENEFITS} />
      <Section title='Requisitos y valores' items={REQUIREMENTS} />
    </>
  )
}
