"use client";

import { Avatar, Card, Typography } from "@mui/material";
import formatNumber from "@/lib/utils/format";

export interface ViewerCardLoadedProps {
  index: number;
  userId: string;
  userNickStation?: string;
  userNickPoongtoday?: string;
  avatarUrl?: string;
  balloon?: number;
  showNickStation?: boolean;
  isError?: boolean;
}

export default function DonorCardLoaded(props: ViewerCardLoadedProps) {
  const {
    index,
    userId,
    userNickPoongtoday,
    userNickStation = "삭제됨",
    avatarUrl,
    balloon = 0,
    showNickStation = false,
    isError = false,
  } = props;

  return (
    <Card className="w-full p-4 flex flex-row gap-x-4 justify-start items-center">
      <Typography>{index + 1}</Typography>
      <Avatar src={avatarUrl} />
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-center">
          <Typography color={isError ? "error" : "primary"}>
            {showNickStation ? userNickStation : userNickPoongtoday}
          </Typography>
          ({userId})
        </div>
        <Typography color="primary" textAlign="left">
          {formatNumber(balloon)}개
        </Typography>
      </div>
    </Card>
  );
}
