import { cn } from "@/lib/cn";

const maxWidth = {
  default: "max-w-3xl",
  wide: "max-w-6xl",
} as const;

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: keyof typeof maxWidth;
}) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8", maxWidth[size], className)}
    >
      {children}
    </div>
  );
}
