import { Code2, Trophy, Users, type LucideIcon } from "lucide-react";

export type EventCategory = "workshop" | "meetup" | "hackathon";

export const EVENT_CATEGORIES: EventCategory[] = ["workshop", "meetup", "hackathon"];

export const EVENT_CATEGORY_META: Record<
  EventCategory,
  { icon: LucideIcon; label: string }
> = {
  workshop: { icon: Code2, label: "Workshop" },
  meetup: { icon: Users, label: "Meetup" },
  hackathon: { icon: Trophy, label: "Hackathon" },
};

export function getEventCategory(eventId: string): EventCategory {
  if (eventId.startsWith("workshop")) return "workshop";
  if (eventId.startsWith("hackathon")) return "hackathon";
  return "meetup";
}
