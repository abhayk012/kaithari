// ─── Review Types ─────────────────────────────────────────────────────────────

export interface Review {
  id: string;
  userName: string;
  title?: string;
  rating: number;       // 1–5
  date: string;         // ISO date string
  comment: string;
  likes: number;
  likedByUser: boolean;
}

export interface RatingSummary {
  average: number;
  total: number;
  breakdown: Record<1 | 2 | 3 | 4 | 5, number>; // count per star level
}
