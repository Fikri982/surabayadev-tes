import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { EventImage } from "@/components/events/EventImage";
import { EventRegistration } from "@/components/events/EventRegistration";
import { SpeakerAvatar } from "@/components/events/SpeakerAvatar";
import { EVENT_CATEGORY_META, getEventCategory } from "@/lib/event-category";
import { formatEventDate, getEventStatus } from "@/lib/format";
import { events } from "@/lib/events";

type EventDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);

  if (!event) {
    notFound();
  }

  const status = getEventStatus(event.date);
  const categoryLabel = EVENT_CATEGORY_META[getEventCategory(event.id)].label;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-12 sm:px-6">
      <Link
        href="/events"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Kembali ke daftar event
      </Link>

      <div className="relative h-48 overflow-hidden rounded-xl sm:h-64">
        <EventImage eventId={event.id} />
        <span className="absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
          {status.label}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-medium text-primary">
          {categoryLabel}
        </span>
        <h1 className="text-3xl font-bold tracking-tight">{event.title}</h1>
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" />
            {formatEventDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0" />
            {event.location}
          </span>
        </div>
        <EventRegistration
          eventId={event.id}
          quota={event.quota}
          initialQuotaRemaining={event.quotaRemaining}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Tentang
        </span>
        <h2 className="text-lg font-semibold tracking-tight">Tentang Event</h2>
        <p className="text-sm leading-relaxed text-foreground/90">
          {event.about ?? event.description}
        </p>
      </div>

      {event.benefits && event.benefits.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Benefit
          </span>
          <h2 className="text-lg font-semibold tracking-tight">Yang Kamu Dapatkan</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {event.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {event.speakers && event.speakers.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Pembicara
          </span>
          <h2 className="text-lg font-semibold tracking-tight">
            {event.speakers.length > 1 ? "Para Pembicara" : "Pembicara"}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {event.speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="relative flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                {speaker.isModerator && (
                  <span className="absolute right-3 top-3 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Moderator
                  </span>
                )}
                <SpeakerAvatar name={speaker.name} avatarUrl={speaker.avatarUrl} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{speaker.name}</span>
                  <span className="text-sm text-muted-foreground">{speaker.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
