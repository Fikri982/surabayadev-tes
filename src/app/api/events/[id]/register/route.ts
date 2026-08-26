import { NextResponse } from "next/server";
import { events } from "@/lib/events";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  if (event.quotaRemaining <= 0) {
    return NextResponse.json({ error: "Kuota penuh" }, { status: 409 });
  }

  event.quotaRemaining -= 1;

  return NextResponse.json(event);
}
