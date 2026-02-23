import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import PopularContracts from '@/components/landing/PopularContracts';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularContracts />
      <Footer />
    </>
  );
}
