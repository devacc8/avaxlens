'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p className="text-text-secondary mb-4">
            {error.message || 'Failed to load contract data. Please try again.'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-avax-red hover:bg-avax-red-hover px-6 py-2 rounded-lg font-medium transition"
            >
              Try Again
            </button>
            <a
              href="/"
              className="bg-bg-input border border-border hover:border-border-hover px-6 py-2 rounded-lg font-medium transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
