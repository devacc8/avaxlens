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
      <div className="flex flex-wrap gap-8 mt-12 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold">Instant</span>
          <span className="text-text-secondary text-sm">Analytics</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold">No Signup</span>
          <span className="text-text-secondary text-sm">No API Key</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold">Free Forever</span>
          <span className="text-text-secondary text-sm">No Hidden Costs</span>
        </div>
      </div>
    </section>
  );
}
