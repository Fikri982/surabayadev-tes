import { EventCard } from "@/components/EventCard";
import type { Event } from "@/lib/types";

type EventListProps = {
  events: Event[];
};

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        Tidak ada event yang ditemukan.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
