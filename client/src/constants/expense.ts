export type ICategory =
  | "Food"
  | "Transport"
  | "Education"
  | "Shopping"
  | "Entertainment"
  | "Bills"
  | "Health"
  | "Other";

export const categories = [
  "Bills", "Education", "Entertainment", "Food", "Health", "Shopping", "Transport", "Other"
] as const

export const CATEGORIES = [
  { label: "Bills", value: "Bills" },
  { label: "Education", value: "Education" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Food", value: "Food" },
  { label: "Health", value: "Health" },
  { label: "Shopping", value: "Shopping" },
  { label: "Transport", value: "Transport" },
  { label: "Other", value: "Other" },
];

export const CATEGORY_ICON: Record<ICategory, string> = {
  Food: "🍔",
  Transport: "🚗",
  Education: "📚",
  Shopping: "🛍️",
  Entertainment: "🎬",
  Bills: "📄",
  Health: "💊",
  Other: "📌",
};

export const CATEGORY_COLORS: Record<ICategory, string> = {
  Food: "hsl(174, 72%, 40%)",
  Transport: "hsl(250, 60%, 58%)",
  Shopping: "hsl(45, 85%, 52%)",
  Entertainment: "hsl(330, 65%, 55%)",
  Bills: "hsl(200, 75%, 50%)",
  Health: "hsl(140, 50%, 45%)",
  Education: "hsl(270, 55%, 50%)",
  Other: "hsl(225, 12%, 48%)",
};

