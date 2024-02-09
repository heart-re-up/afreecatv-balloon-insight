"use client";

import { Button } from "@mui/material";
import { useMemo } from "react";
import Donor from "@/components/Donor";
import useQueryBalloon from "@/queries/useQueryBalloon";
import collectViewers from "@/lib/utils/collectViewers";
import useArrayAsPage from "@/hooks/useArrayAsPage";

export interface DonorsProps {
  streamerId: string;
}
export default function Donors({ streamerId }: DonorsProps) {
  const { data = [] } = useQueryBalloon(streamerId);
  const viewers = useMemo(() => collectViewers(...data), [data]);
  const { items, hasNext, next } = useArrayAsPage(viewers, 20);
  return (
    <div>
      <div className="space-y-1">
        {items.map((v, index) => (
          <Donor key={v.userId} index={index} collectedViewer={v} />
        ))}
      </div>
      {hasNext ? (
        <Button
          className="w-full mt-4"
          variant="outlined"
          onClick={() => next()}
        >
          더보기 ({items.length}/{viewers.length - 1})
        </Button>
      ) : null}
    </div>
  );
}
