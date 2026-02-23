'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isValidAddress } from '@/lib/validation';

interface AddressInputProps {
  size?: 'large' | 'small';
  placeholder?: string;
}

export default function AddressInput({ size = 'large', placeholder }: AddressInputProps) {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = address.trim();

    if (!trimmed) {
      setError('Please enter a contract address');
      return;
    }

    if (!isValidAddress(trimmed)) {
      setError('Invalid Avalanche address format');
      return;
    }

    setError('');
    router.push(`/contract/${trimmed}`);
  };

  const isLarge = size === 'large';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`bg-bg-input rounded-xl ${isLarge ? 'p-2' : 'p-1'} flex flex-col ${isLarge ? 'md:flex-row' : 'flex-row'} gap-2`}>
        <input
          type="text"
          value={address}
          onChange={(e) => { setAddress(e.target.value); setError(''); }}
          placeholder={placeholder || 'Paste any Avalanche C-Chain contract address'}
          className={`flex-1 bg-transparent ${isLarge ? 'px-4 py-3' : 'px-3 py-2'} text-white placeholder-text-muted focus:outline-none font-mono ${isLarge ? 'text-sm' : 'text-xs'}`}
        />
        <button
          type="submit"
          className={`${isLarge ? 'px-8 py-3' : 'px-6 py-2'} rounded-lg font-medium transition hover:bg-avax-red-hover bg-avax-red text-white whitespace-nowrap ${isLarge ? 'text-base' : 'text-sm'}`}
        >
          {isLarge ? 'Analyze Contract' : 'Analyze'}
        </button>
      </div>
      {error && <p className="text-error text-sm mt-2">{error}</p>}
    </form>
  );
}
