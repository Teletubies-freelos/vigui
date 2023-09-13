import { Nav } from '@/organisms/Nav';
import { Benefits } from '@/organisms/Benefits';
import { Hero } from '@/organisms/Hero';
import { AboutUS } from '@/organisms/AboutUs';
import InternetPlans from '@/organisms/InternetPlans';
import SectionContact from '@/organisms/SectionContact';
import TvPlans from '@/organisms/PlansTv';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUS />
      <Benefits />
      <InternetPlans />
      <TvPlans />
      <SectionContact />
    </>
  );
}
