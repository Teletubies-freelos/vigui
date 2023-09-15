import { Nav } from '@/organisms/Nav';
import { Benefits } from '@/organisms/Benefits';
import { Hero } from '@/organisms/Hero';
import { AboutUS } from '@/organisms/AboutUs';
import InternetPlans from '@/organisms/InternetPlans';
import SectionContact from '@/organisms/SectionContact';
import TvPlans from '@/organisms/PlansTv';
import SectionTestimonials from '@/organisms/SectionTestimonials';
import SectionTeam from '@/organisms/SectionTeam';

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
      <SectionTestimonials />
      <SectionContact />
    </>
  );
}
