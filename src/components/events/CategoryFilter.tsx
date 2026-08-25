"use client";

import { EVENT_CATEGORIES, EVENT_CATEGORY_META, type EventCategory } from "@/lib/event-category";
import { cn } from "@/lib/utils";

type CategoryFilterValue = "all" | EventCategory;

type CategoryFilterProps = {
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
};

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  const options: { value: CategoryFilterValue; label: string }[] = [
    { value: "all", label: "Semua" },
    ...EVENT_CATEGORIES.map((category) => ({
      value: category,
      label: EVENT_CATEGORY_META[category].label,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
            value === option.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
