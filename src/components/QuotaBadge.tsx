import { Badge } from "@/components/ui/badge";

type QuotaBadgeProps = {
  quota: number;
  quotaRemaining: number;
};

export function QuotaBadge({ quota, quotaRemaining }: QuotaBadgeProps) {
  if (quotaRemaining <= 0) {
    return <Badge variant="destructive">Kuota penuh</Badge>;
  }

  const isLow = quotaRemaining / quota <= 0.2;

  if (isLow) {
    return (
      <Badge
        variant="outline"
        className="border-transparent bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-400"
      >
        Sisa {quotaRemaining} kuota
      </Badge>
    );
  }

  return (
    <Badge
      variant="outline"
      className="border-transparent bg-primary-light text-primary"
    >
      {quotaRemaining} kuota tersedia
    </Badge>
  );
}
