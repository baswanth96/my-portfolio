import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden border-y border-border/60 bg-muted/35",
        className,
      )}
      role="presentation"
    >
      <div className="flex w-max py-3 will-change-transform animate-marquee">
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex items-center gap-10 px-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-muted-foreground sm:gap-14 sm:px-10 sm:text-[11px]"
          >
            {items.map((item) => (
              <span
                key={`${set}-${item}`}
                className="flex shrink-0 items-center gap-10 sm:gap-14"
              >
                <span>{item}</span>
                <span className="select-none text-brand opacity-90">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
