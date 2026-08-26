"use client";

import { useState } from "react";
import { QuotaBadge } from "@/components/shared/QuotaBadge";
import { RegisterButton } from "@/components/events/RegisterButton";

type EventRegistrationProps = {
  eventId: string;
  quota: number;
  initialQuotaRemaining: number;
};

export function EventRegistration({
  eventId,
  quota,
  initialQuotaRemaining,
}: EventRegistrationProps) {
  const [quotaRemaining, setQuotaRemaining] = useState(initialQuotaRemaining);

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <QuotaBadge quota={quota} quotaRemaining={quotaRemaining} />
      <RegisterButton
        eventId={eventId}
        quotaRemaining={quotaRemaining}
        onSuccess={setQuotaRemaining}
      />
    </div>
  );
}
