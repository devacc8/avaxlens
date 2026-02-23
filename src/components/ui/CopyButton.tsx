'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [toast, setToast] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="text-text-secondary hover:text-white transition"
        title="Copy address"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
      {toast && (
        <div className="fixed bottom-4 right-4 bg-bg-card text-white px-4 py-3 rounded-lg shadow-lg border border-border z-50 animate-fade-in text-sm">
          Address copied!
        </div>
      )}
    </div>
  );
}
