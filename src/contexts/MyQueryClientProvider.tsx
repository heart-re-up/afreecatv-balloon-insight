"use client";

import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import LayoutDefaultParams from "@/lib/LayoutDefaultParams";

export default function MyQueryClientProvider({
  children,
}: LayoutDefaultParams) {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
