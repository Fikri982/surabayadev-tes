import { CalendarSearch } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import type { Event } from "@/lib/types";

type EventListProps = {
  events: Event[];
};

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <CalendarSearch className="size-6" />
        </span>
        <p className="text-sm text-muted-foreground">
          Tidak ada event yang ditemukan.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
