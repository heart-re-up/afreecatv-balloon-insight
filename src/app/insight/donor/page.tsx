"use client";

import { useSearchParams } from "next/navigation";
import DonorGraph from "@/components/donor/DonorGraph";

// sample => http://localhost:3000/insight/donor/?streamerId=sol3712&donorId=kshjj990
export default function Page() {
  const searchParams = useSearchParams();
  const streamerId = searchParams.get("streamerId") ?? "";
  const donorId = searchParams.get("donorId") ?? "";
  return (
    <div className="w-full overflow-y-scroll">
      <DonorGraph streamerId={streamerId} donorId={donorId} />
    </div>
  );
}
