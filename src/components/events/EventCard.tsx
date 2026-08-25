import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventImage } from "@/components/events/EventImage";
import { QuotaBadge } from "@/components/events/QuotaBadge";
import { EVENT_CATEGORY_META, getEventCategory } from "@/lib/event-category";
import { formatEventDate, getEventStatus } from "@/lib/format";
import type { Event } from "@/lib/types";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const status = getEventStatus(event.date);
  const categoryLabel = EVENT_CATEGORY_META[getEventCategory(event.id)].label;

  return (
    <Link href={`/events/${event.id}`} className="block h-full">
      <Card className="relative h-full transition-shadow hover:shadow-md">
        <div className="-mx-4 -mt-4 h-24 overflow-hidden rounded-t-xl">
          <EventImage eventId={event.id} />
        </div>
        <span className="absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
          {status.label}
        </span>
        <CardHeader>
          <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-medium text-primary">
            {categoryLabel}
          </span>
          <CardTitle className="mt-1">{event.title}</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 shrink-0" />
              {formatEventDate(event.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0" />
              {event.location}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col justify-between gap-3">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {event.description}
          </p>
          <QuotaBadge quota={event.quota} quotaRemaining={event.quotaRemaining} />
        </CardContent>
        <CardFooter>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Lihat detail
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/card:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
