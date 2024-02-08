"use client";

import { useSearchParams } from "next/navigation";
import PageParams from "@/lib/PageParams";

export default function Page({ params }: PageParams) {
  const { id } = params;
  return <div>{id}</div>;
}
