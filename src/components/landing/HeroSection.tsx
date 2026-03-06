import AddressInput from '@/components/ui/AddressInput';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Understand your contract
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-avax-red to-[#FF6B6B] bg-clip-text text-transparent">
        in 10 seconds
      </h2>
      <div className="w-full max-w-2xl">
        <AddressInput size="large" />
      </div>
      <p className="text-text-secondary text-sm mt-8">
        Free analytics for any Avalanche C-Chain contract
      </p>
    </section>
  );
}
