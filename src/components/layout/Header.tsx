import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-avax-red to-[#FF6B6B] bg-clip-text text-transparent">
              AVAXLENS
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-text-secondary">
            <a href="https://github.com/devacc8/avaxlens" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
