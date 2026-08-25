import { Code2, Users, type LucideIcon } from "lucide-react";

export type EventCategory = "workshop" | "meetup";

export const EVENT_CATEGORIES: EventCategory[] = ["workshop", "meetup"];

export const EVENT_CATEGORY_META: Record<
  EventCategory,
  { icon: LucideIcon; label: string }
> = {
  workshop: { icon: Code2, label: "Workshop" },
  meetup: { icon: Users, label: "Meetup" },
};

export function getEventCategory(eventId: string): EventCategory {
  if (eventId.startsWith("workshop")) return "workshop";
  return "meetup";
}
