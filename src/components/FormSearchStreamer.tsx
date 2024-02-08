"use client";

import { useCallback, useState } from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { ISuggestBj } from "@afreecatv/api";
import InputSearchStreamer from "@/components/InputSearchStreamer";
import MyModal from "@/components/MyModal";
import StreamerList from "@/components/afreeca/StreamerList";
import useQuerySearchStreamers from "@/queries/useQuerySearchStreamers";

export default function FormSearchStreamer() {
  const [inputSearch, setInputSearch] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const { data: streamers, refetch } = useQuerySearchStreamers(inputSearch);
  const router = useRouter();
  const handleOnSearch = useCallback(
    (text: string) => setInputSearch(text),
    [setInputSearch],
  );
  const handleClickStreamer = useCallback((streamer: ISuggestBj) => {
    router.push(`/bj/${streamer.user_id}`);
  }, []);
  return (
    <Container>
      <InputSearchStreamer onSearch={handleOnSearch} />
      <StreamerList streamers={streamers ?? []} onClick={handleClickStreamer} />
    </Container>
  );
}
