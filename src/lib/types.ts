export type EventSpeaker = {
  name: string;
  role: string;
  isModerator?: boolean;
  avatarUrl?: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  about?: string;
  benefits?: string[];
  speakers?: EventSpeaker[];
  price?: number; // dalam Rupiah, undefined/0 berarti gratis
  date: string; // ISO string
  location: string;
  quota: number;
  quotaRemaining: number;
  imageUrl?: string;
};
