import { Nav } from '@/features/Nav';
import { Benefits } from '@/features/Benefits';
import { Hero } from '@/features/Hero';
import { AboutUS } from '@/features/AboutUs';
import InternetPlans from '@/features/InternetPlans';
import SectionContact from '@/features/SectionContact';
import TvPlans from '@/features/PlansTv';
import SectionTestimonials from '@/features/SectionTestimonials';
import SectionTeam from '@/features/SectionTeam';
import Banner from '@/features/Banner';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUS />
      <SectionTeam />
      <Benefits />
      <InternetPlans />
      <TvPlans />
      <Banner />
      <SectionTestimonials />
      <SectionContact />
    </>
  );
}
