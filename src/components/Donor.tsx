"use client";

import { Avatar, Card, Skeleton, Typography } from "@mui/material";
import { useMemo } from "react";
import CollectedPViewer from "@/lib/model/poongtoday/PViewerMerged";
import useQueryStation from "@/queries/useQueryStation";
import UserNick from "@/components/UserNick";

export interface DonorProps {
  index: number;
  collectedViewer: CollectedPViewer;
}

const formatter = new Intl.NumberFormat("ko-KR");
export default function Donor(props: DonorProps) {
  const { index, collectedViewer } = props;
  const { data, isLoading, isError } = useQueryStation(collectedViewer.userId);
  const renderAvatar = isLoading ? (
    <Skeleton variant="circular" width={40} height={40} />
  ) : (
    <Avatar src={data?.profileImage} />
  );
  const balloonTotalString = useMemo(
    () => formatter.format(collectedViewer.balloonTotal),
    [collectedViewer],
  );

  return (
    <Card>
      <div className="flex flex-row justify-start items-center gap-x-4 p-4">
        <Typography>{index + 1}</Typography>
        {renderAvatar}
        <div>
          <div className="flex-1 flex">
            {collectedViewer.recentUserNick}
            {isLoading ? (
              <Skeleton variant="text" width="20px" height="20px" />
            ) : (
              <UserNick
                userNick={data?.station?.userNick}
                notExists={isError}
              />
            )}
          </div>
          <Typography>{balloonTotalString} 개</Typography>
        </div>
      </div>
    </Card>
  );
}
