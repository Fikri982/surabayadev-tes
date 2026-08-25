"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      onSearch(value);
    }, 400);

    return () => clearTimeout(timeout);
  }, [value, onSearch]);

  return (
    <Input
      type="search"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Cari event..."
      className="max-w-sm"
    />
  );
}
