"use client";

import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import StreamerCard from "@/components/afreeca/StreamerCard";
import Donors from "@/components/Donors";
import MyAppBar from "@/components/MyAppBar";

export default function InsightPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  return (
    <main>
      <MyAppBar />
      <Container className="py-4 space-y-4">
        <StreamerCard userId={id} />
        <Donors streamerId={id} />
      </Container>
    </main>
  );
}
