"use client";

import { startTransition, useCallback, useMemo, useState, ViewTransition } from "react";
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
      startTransition(() => {
        setEvents(data);
      });
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleCategoryChange = useCallback((value: "all" | EventCategory) => {
    startTransition(() => {
      setCategory(value);
    });
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
        <CategoryFilter value={category} onChange={handleCategoryChange} />
      </div>
      <div
        className={cn(
          "transition-opacity duration-200",
          isSearching && "opacity-50"
        )}
      >
        <ViewTransition
          key={visibleEvents.map((event) => event.id).join(",")}
          name="event-list"
          share="auto"
          enter="auto"
          default="none"
        >
          <EventList events={visibleEvents} />
        </ViewTransition>
      </div>
    </div>
  );
}
