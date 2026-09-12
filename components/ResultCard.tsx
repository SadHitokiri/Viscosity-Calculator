type ResultCardProps = {
  label: string;
  value: string;
  unit: string;
  mutedText: string;
};

export function ResultCard({ label, value, unit, mutedText }: ResultCardProps) {
  return (
    <article className="rounded-lg border border-steel-800 bg-steel-950 p-5 shadow-panel">
      <p className="text-sm font-bold uppercase tracking-[0.08em] text-steel-300">{label}</p>
      <div className="mt-4 flex min-h-16 items-end gap-2">
        {value ? (
          <>
            <p className="text-5xl font-black leading-none tracking-normal text-white tabular-nums">
              {value}
            </p>
            <p className="pb-1 text-xl font-bold text-steel-300">{unit}</p>
          </>
        ) : (
          <p className="text-lg font-semibold text-steel-400">{mutedText}</p>
        )}
      </div>
    </article>
  );
}
