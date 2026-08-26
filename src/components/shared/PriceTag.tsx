import { Gift, Ticket } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

type PriceTagProps = {
  price?: number;
  className?: string;
};

export function PriceTag({ price, className }: PriceTagProps) {
  const isFree = !price;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold",
        isFree ? "text-primary" : "text-foreground",
        className
      )}
    >
      {isFree ? <Gift className="size-4" /> : <Ticket className="size-4" />}
      {formatPrice(price)}
    </span>
  );
}
