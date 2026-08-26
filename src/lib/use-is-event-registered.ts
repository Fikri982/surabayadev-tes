"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

export function useIsEventRegistered(eventId: string) {
  return useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(`registered_${eventId}`) === "true",
    getServerSnapshot
  );
}
