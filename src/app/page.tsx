import { Nav } from '@/organisms/Nav';
import { Benefits } from '@/organisms/Benefits';
import { Hero } from '@/organisms/Hero';
import { AboutUS } from '@/organisms/AboutUs';
import InternetPlans from '@/organisms/InternetPlans';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUS />
      <Benefits />
      <InternetPlans />
    </>
  );
}
