import type { LucideIcon } from "lucide-react";

type CategoryBannerProps = {
  icon: LucideIcon;
};

export function CategoryBanner({ icon: Icon }: CategoryBannerProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-primary to-primary-hover">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          color: "var(--primary-foreground)",
        }}
      />
      <Icon
        className="relative size-9 text-primary-foreground/90"
        strokeWidth={1.5}
      />
    </div>
  );
}
