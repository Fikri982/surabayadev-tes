import { EventsBrowser } from "@/components/events/EventsBrowser";
import { events } from "@/lib/events";

export default function EventsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-12 sm:px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Event <span className="text-primary">SurabayaDev</span>
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Temukan workshop dan meetup dari komunitas developer Surabaya.
        </p>
      </div>
      <EventsBrowser initialEvents={events} />
    </main>
  );
}
