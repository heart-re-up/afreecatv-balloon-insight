"use client";

import { Button, FormControlLabel, Switch, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import useQueryBalloon from "@/queries/useQueryBalloon";
import mergeDonors from "@/lib/utils/mergeDonors";
import useArrayAsPage from "@/hooks/useArrayAsPage";
import DonorCard from "@/components/donor/DonorCard";

export interface DonorsProps {
  streamerId: string;
}

export default function DonorCardList({ streamerId }: DonorsProps) {
  const { data = [] } = useQueryBalloon(streamerId);
  const viewers = useMemo(() => mergeDonors(...data), [data]);
  const { items, hasNext, next } = useArrayAsPage(viewers, 20);
  const [showNickStation, setShowNickStation] = useState(false);
  const router = useRouter();
  const handleClick = (donorId: string) =>
    router.push(`/insight/donor?streamerId=${streamerId}&donorId=${donorId}`);
  return (
    <div>
      <div className="sticky top-0">
        <FormControlLabel
          control={
            <Switch
              checked={showNickStation}
              onChange={(e) => setShowNickStation(e.target.checked)}
            />
          }
          label="방송국 닉네임으로 보기"
        />
      </div>
      <Typography fontSize="x-small">
        이 목록은 실제 열혈 순위가 아닙니다.
      </Typography>
      <div className="space-y-1">
        {items.map((v, index) => (
          <DonorCard
            key={v.userId}
            index={index}
            userId={v.userId}
            userNickPoongtoday={v.recentUserNick}
            balloon={v.balloonTotal}
            showNickStation={showNickStation}
            onClick={handleClick}
          />
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
