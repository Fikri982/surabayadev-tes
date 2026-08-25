"use client";

import { useCallback, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { EventList } from "@/components/EventList";
import type { Event } from "@/lib/types";

type EventsBrowserProps = {
  initialEvents: Event[];
};

export function EventsBrowser({ initialEvents }: EventsBrowserProps) {
  const [events, setEvents] = useState(initialEvents);

  const handleSearch = useCallback(async (query: string) => {
    const res = await fetch(`/api/events?search=${encodeURIComponent(query)}`);
    const data = await res.json();
    setEvents(data);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <SearchBar onSearch={handleSearch} />
      <EventList events={events} />
    </div>
  );
}
