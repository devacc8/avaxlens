interface MetricCardProps {
  label: string;
  value: string;
  color?: string;
}

export default function MetricCard({ label, value, color }: MetricCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5">
      <p className="text-text-secondary text-sm mb-1">{label}</p>
      <p className={`text-3xl font-bold ${color || 'text-white'}`}>{value}</p>
    </div>
  );
}
