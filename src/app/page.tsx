import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import RecentSearches from '@/components/landing/RecentSearches';
import PopularContracts from '@/components/landing/PopularContracts';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureGrid />
      <RecentSearches />
      <PopularContracts />
      <Footer />
    </>
  );
}
