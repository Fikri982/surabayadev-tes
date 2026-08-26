"use client";

import { useCallback, useMemo, useState } from "react";
import { SearchBar } from "@/components/shared/SearchBar";
import { CategoryFilter } from "@/components/events/CategoryFilter";
import { EventList } from "@/components/events/EventList";
import { getEventCategory, type EventCategory } from "@/lib/event-category";
import { cn } from "@/lib/utils";
import type { Event } from "@/lib/types";

type EventsBrowserProps = {
  initialEvents: Event[];
};

export function EventsBrowser({ initialEvents }: EventsBrowserProps) {
  const [events, setEvents] = useState(initialEvents);
  const [category, setCategory] = useState<"all" | EventCategory>("all");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    setIsSearching(true);
    try {
      const res = await fetch(`/api/events?search=${encodeURIComponent(query)}`);
      const data = await res.json();
      setEvents(data);
    } finally {
      setIsSearching(false);
    }
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
        <SearchBar
          onSearch={handleSearch}
          isLoading={isSearching}
          className="w-full sm:max-w-sm"
        />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
      <div
        className={cn(
          "transition-opacity duration-200",
          isSearching && "opacity-50"
        )}
      >
        <EventList events={visibleEvents} />
      </div>
    </div>
  );
}
