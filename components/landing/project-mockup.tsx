type ProjectMockupProps = {
  index: number;
  accent: string;
};

export function ProjectMockup({ index, accent }: ProjectMockupProps) {
  const bars =
    index === 0
      ? [84, 58, 72]
      : index === 1
        ? [62, 92, 47]
        : [76, 54, 89];

  return (
    <div className="border-b border-black/10 bg-[#f7f7f7] p-4">
      <div className="overflow-hidden rounded-[8px] border border-black/10 bg-white">
        <div className="flex items-center gap-1 border-b border-black/10 px-3 py-2">
          <span className="h-2 w-2 rounded-[4px] bg-black/20" />
          <span className="h-2 w-2 rounded-[4px] bg-black/12" />
          <span className="h-2 w-2 rounded-[4px] bg-black/12" />
          <span className="ml-3 h-3 w-24 rounded-[4px] bg-black/8" />
        </div>
        <div className="grid min-h-48 gap-4 p-4 text-black sm:grid-cols-[1fr_0.72fr] lg:grid-cols-1 xl:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="h-3 w-16 rounded-[4px]" style={{ backgroundColor: accent }} />
            <div className="mt-4 h-6 w-4/5 rounded-[4px] bg-black" />
            <div className="mt-2 h-6 w-3/5 rounded-[4px] bg-black" />
            <div className="mt-4 space-y-2">
              {bars.map((bar) => (
                <div key={bar} className="h-2 rounded-[4px] bg-black/8">
                  <div className="h-2 rounded-[4px] bg-black" style={{ width: `${bar}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-3">
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-[8px] bg-black" />
              <div className="h-3 w-14 rounded-[4px]" style={{ backgroundColor: accent }} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-[8px] bg-white" />
              <div className="h-14 rounded-[8px] bg-black" />
            </div>
            <div className="mt-3 h-14 rounded-[8px] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
