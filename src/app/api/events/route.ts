import { NextResponse, type NextRequest } from "next/server";
import { events } from "@/lib/events";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search")?.trim().toLowerCase();

  const filtered = search
    ? events.filter((event) => event.title.toLowerCase().includes(search))
    : events;

  return NextResponse.json(filtered);
}
