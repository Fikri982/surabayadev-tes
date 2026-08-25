import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuotaBadge } from "@/components/QuotaBadge";
import { formatEventDate } from "@/lib/format";
import type { Event } from "@/lib/types";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>
            {formatEventDate(event.date)} &middot; {event.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {event.description}
          </p>
          <QuotaBadge quota={event.quota} quotaRemaining={event.quotaRemaining} />
        </CardContent>
        <CardFooter>
          <span className="text-sm font-medium text-primary">
            Lihat detail
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
