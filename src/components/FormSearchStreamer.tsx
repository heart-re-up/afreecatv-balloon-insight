"use client";

import { useCallback, useRef, useState } from "react";
import { Container, Popover } from "@mui/material";
import { useRouter } from "next/navigation";
import { SuggestBj } from "@afreecatv/api";
import InputSearchStreamer from "@/components/InputSearchStreamer";
import StreamerSearchResultList from "@/components/afreeca/StreamerSearchResultList";
import useQuerySearchStreamers from "@/queries/useQuerySearchStreamers";

export default function FormSearchStreamer() {
  const [inputSearch, setInputSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const { data: streamers = [] } = useQuerySearchStreamers(inputSearch);
  // const shouldShowStreamers = useMemo(() => streamers.length > 0, [streamers]);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  /** 검색이 발생하면 Popover 앵커를 설정한다 */
  const handleOnSearch = useCallback(
    (text: string) => {
      setInputSearch(text);
      setAnchorEl(ref.current);
    },
    [setInputSearch],
  );
  const handleClickStreamer = useCallback(
    (streamer: SuggestBj) => router.push(`/insight?id=${streamer.userId}`),
    [router],
  );
  // const anchorEl = useMemo(() => ref.current, [ref]);

  return (
    <Container>
      <InputSearchStreamer onSearch={handleOnSearch} ref={ref} />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <StreamerSearchResultList
          streamers={streamers}
          onClick={handleClickStreamer}
        />
      </Popover>
    </Container>
  );
}
