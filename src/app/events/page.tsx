import { EventsBrowser } from "@/components/EventsBrowser";
import { events } from "@/lib/events";

export default function EventsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Event</h1>
        <p className="text-sm text-muted-foreground">
          Temukan workshop, meetup, dan hackathon dari komunitas developer.
        </p>
      </div>
      <EventsBrowser initialEvents={events} />
    </main>
  );
}
