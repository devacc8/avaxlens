interface ComingSoonProps {
  title: string;
  description: string;
  icon: string;
}

export default function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-12 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-input rounded-lg text-sm text-text-secondary">
        <span className="w-2 h-2 bg-avax-red rounded-full animate-pulse" />
        Coming Soon
      </div>
    </div>
  );
}
