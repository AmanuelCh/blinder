import GradientWrapper from '../components/GradientWrapper';
import CTA from '../components/ui/CTA';
import Features from '../components/ui/Features';
import FooterCTA from '../components/ui/FooterCTA';
import Hero from '../components/ui/Hero';
import LogoGrid from '../components/ui/LogoGrid';
import Testimonials from '../components/ui/Testimonials';
import ToolKit from '../components/ui/ToolKit';

export default function Home({ isDarkMode }) {
  return (
    <>
      <Hero />
      <LogoGrid isDarkMode={isDarkMode} />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
