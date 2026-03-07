import type { ContractInfo } from '@/lib/types';
import CopyButton from '@/components/ui/CopyButton';
import AddressInput from '@/components/ui/AddressInput';

interface ContractHeaderProps {
  info: ContractInfo;
}

export default function ContractHeader({ info }: ContractHeaderProps) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-text-secondary font-mono text-xs sm:text-sm truncate">{info.address}</span>
        <CopyButton text={info.address} />
        <a
          href={`https://snowtrace.io/address/${info.address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-border hover:bg-border-hover px-2.5 py-0.5 rounded-md text-xs font-medium transition flex items-center gap-1 shrink-0"
        >
          Snowtrace
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-start justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold truncate max-w-[280px] sm:max-w-none">{info.name}</h2>
          {info.verified && (
            <span className="bg-success/20 text-success px-2 py-0.5 rounded text-xs font-medium">
              Verified
            </span>
          )}
          {info.creationDate && (
            <p className="text-text-secondary text-sm w-full">
              Created: {info.creationDate} &bull; C-Chain
            </p>
          )}
        </div>
        <div className="w-full lg:w-auto lg:min-w-[400px]">
          <AddressInput size="small" placeholder="Paste Avalanche contract address" />
        </div>
      </div>
    </div>
  );
}
