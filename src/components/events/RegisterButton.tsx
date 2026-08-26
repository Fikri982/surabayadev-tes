"use client";

import { useState, useSyncExternalStore } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

type RegisterButtonProps = {
  eventId: string;
  quotaRemaining: number;
  onSuccess: (quotaRemaining: number) => void;
};

export function RegisterButton({
  eventId,
  quotaRemaining,
  onSuccess,
}: RegisterButtonProps) {
  const isRegistered = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(`registered_${eventId}`) === "true",
    getServerSnapshot
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRegister() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/events/${eventId}/register`, {
        method: "POST",
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Gagal mendaftar");
        return;
      }

      localStorage.setItem(`registered_${eventId}`, "true");
      onSuccess(data.quotaRemaining);
    } catch {
      setError("Gagal mendaftar, coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isRegistered) {
    return (
      <Button disabled variant="secondary" className="w-fit gap-1.5">
        <CheckCircle2 className="size-4 animate-in zoom-in-50 duration-300" />
        Sudah terdaftar
      </Button>
    );
  }

  if (quotaRemaining <= 0) {
    return (
      <Button disabled variant="secondary" className="w-fit">
        Kuota penuh
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Button onClick={handleRegister} disabled={isLoading} className="w-fit">
        {isLoading && <Loader2 className="size-4 animate-spin" />}
        {isLoading ? "Mendaftar..." : "Daftar Sekarang"}
      </Button>
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
