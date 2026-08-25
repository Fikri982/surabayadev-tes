"use client";

import { useCallback, useMemo, useState } from "react";
import { SearchBar } from "@/components/shared/SearchBar";
import { CategoryFilter } from "@/components/events/CategoryFilter";
import { EventList } from "@/components/events/EventList";
import { getEventCategory, type EventCategory } from "@/lib/event-category";
import type { Event } from "@/lib/types";

type EventsBrowserProps = {
  initialEvents: Event[];
};

export function EventsBrowser({ initialEvents }: EventsBrowserProps) {
  const [events, setEvents] = useState(initialEvents);
  const [category, setCategory] = useState<"all" | EventCategory>("all");

  const handleSearch = useCallback(async (query: string) => {
    const res = await fetch(`/api/events?search=${encodeURIComponent(query)}`);
    const data = await res.json();
    setEvents(data);
  }, []);

  const visibleEvents = useMemo(
    () =>
      category === "all"
        ? events
        : events.filter((event) => getEventCategory(event.id) === category),
    [events, category]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar onSearch={handleSearch} className="w-full sm:max-w-sm" />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
      <EventList events={visibleEvents} />
    </div>
  );
}
