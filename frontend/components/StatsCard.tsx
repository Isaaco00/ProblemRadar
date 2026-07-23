type StatsCardProps = {
  label: string;
  value: string | number;
  color?: string;
};

export default function StatsCard({
  label,
  value,
  color = "text-white",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-[#26272B] bg-[#141416] p-6">
      <p className="text-gray-400">{label}</p>

      <h3 className={`mt-4 text-5xl font-bold ${color}`}>
        {value}
      </h3>
    </div>
  );
}