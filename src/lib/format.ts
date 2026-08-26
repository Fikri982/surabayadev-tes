export function formatEventDate(dateIso: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  }).format(new Date(dateIso));
}

export function formatPrice(price?: number) {
  if (!price) {
    return "Gratis";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getEventStatus(dateIso: string) {
  const diffMs = new Date(dateIso).getTime() - Date.now();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    return { label: "Sudah berlangsung", isPast: true };
  }
  if (diffDays === 0) {
    return { label: "Berlangsung hari ini", isPast: false };
  }
  if (diffDays === 1) {
    return { label: "Besok", isPast: false };
  }
  return { label: `${diffDays} hari lagi`, isPast: false };
}
