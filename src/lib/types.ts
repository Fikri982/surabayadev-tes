export type Event = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string
  location: string;
  quota: number;
  quotaRemaining: number;
  imageUrl?: string;
};
