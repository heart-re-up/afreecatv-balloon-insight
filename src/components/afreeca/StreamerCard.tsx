"use client";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { filter, flatMap, isEmpty, reduce } from "lodash";
import { useMemo } from "react";
import useQueryStation from "@/queries/useQueryStation";
import useQueryBalloon from "@/queries/useQueryBalloon";
import GroupsOfStreamer from "@/components/afreeca/GroupsOfStreamer";

export interface StreamerCardProps {
  userId: string;
}
const formatter = new Intl.NumberFormat("ko-KR");
export default function StreamerCard(props: StreamerCardProps) {
  const { userId } = props;
  const { data: station, isLoading: isLoadingStation } =
    useQueryStation(userId);
  const { data: months } = useQueryBalloon(userId);
  const viewers = useMemo(
    () =>
      filter(
        flatMap(months, (v) => v.viewers),
        (v) => !isEmpty(v),
      ),
    [months],
  );
  const balloonTotal = useMemo(
    () => reduce(viewers, (prev, curr) => prev + (curr?.balloon ?? 0), 0),
    [viewers],
  );
  const balloonTotalString = useMemo(
    () => formatter.format(balloonTotal),
    [balloonTotal],
  );
  return (
    <Card>
      <CardHeader
        title={
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-4 justify-start items-center">
              {isLoadingStation ? (
                <>
                  <Skeleton variant="circular" width={40} height={40} />
                  <div className="flex flex-col gap-1">
                    <Skeleton variant="text" width={80} height={30} />
                    <Skeleton variant="text" width={80} height={30} />
                  </div>
                </>
              ) : (
                <>
                  <Avatar src={station?.profileImage} />
                  {station?.station?.userNick}
                </>
              )}
            </div>
            <GroupsOfStreamer groups={station?.station.groups} />
          </div>
        }
      />
      <Divider />
      <CardContent>
        <div className="flex flex-col gap-1">
          {balloonTotal === 0 ? (
            <div className="flex flex-col items-end">
              <Skeleton variant="text" width={80} height={20} />
              <Skeleton variant="text" width={120} height={14} />
            </div>
          ) : (
            <>
              <Typography variant="h5" align="right" color="primary">
                {balloonTotalString} 개{" "}
              </Typography>
              <Typography
                align="right"
                fontSize="xx-small"
                color="accentPrimary"
              >
                풍투데이에서 2021.01 부터 수집된 데이터 입니다.
              </Typography>
            </>
          )}
          {/* 그룹: 가지고 있는 타이틀 */}
        </div>
      </CardContent>
    </Card>
  );
}
