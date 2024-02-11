"use client";

import { useSearchParams } from "next/navigation";
import DonorGraph from "@/components/donor/DonorGraph";

export default function Page() {
  const searchParams = useSearchParams();
  const streamerId = searchParams.get("streamerId") ?? "";
  const donorId = searchParams.get("donorId") ?? "";

  return (
    <main>
      <DonorGraph streamerId={streamerId} donorId={donorId} />
    </main>
  );
}
