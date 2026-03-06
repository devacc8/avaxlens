import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import ContractExplorer from '@/components/landing/ContractExplorer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureGrid />
      <ContractExplorer />
      <Footer />
    </>
  );
}
