import { ViewTransition } from "react";
import { EventsBrowser } from "@/components/events/EventsBrowser";
import { events } from "@/lib/events";

// quotaRemaining berubah lewat registrasi, jadi halaman ini harus selalu
// dirender ulang per request, bukan di-cache statis
export const dynamic = "force-dynamic";

export default function EventsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
      <ViewTransition
        enter={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        exit={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        default="none"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Event <span className="text-primary">SurabayaDev</span>
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              Temukan workshop dan meetup dari komunitas developer Surabaya.
            </p>
          </div>
          <EventsBrowser initialEvents={events} />
        </div>
      </ViewTransition>
    </main>
  );
}
