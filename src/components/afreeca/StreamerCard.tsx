"use client";

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { filter, flatMap, isEmpty, reduce } from "lodash";
import { useMemo } from "react";
import useQueryBalloon from "@/queries/useQueryBalloon";
import StreamerCardHeader from "@/components/afreeca/StreamerCardHeader";
import formatNumber from "@/lib/utils/format";

export interface StreamerCardProps {
  userId: string;
}

export default function StreamerCard(props: StreamerCardProps) {
  const { userId } = props;
  const { data, isLoading } = useQueryBalloon(userId);

  // 모든 기록에서 후원자 추출
  const donors = useMemo(() => {
    const flatten = flatMap(data, (v) => v.donors);
    return filter(flatten, (v) => !isEmpty(v));
  }, [data]);
  const balloonTotal = useMemo(
    () => reduce(donors, (prev, curr) => prev + (curr?.balloon ?? 0), 0),
    [donors],
  );
  const balloonTotalString = useMemo(
    () => formatNumber(balloonTotal),
    [balloonTotal],
  );
  return (
    <Card>
      <CardHeader title={<StreamerCardHeader userId={userId} />} />
      <Divider />
      <CardContent>
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <div className="flex flex-col items-end">
              <Skeleton variant="text" width={80} height={30} />
              <Skeleton variant="text" width={160} height={16} />
              <Skeleton variant="text" width={160} height={16} />
            </div>
          ) : (
            <>
              <Typography variant="h5" align="right" color="primary">
                {balloonTotalString} 개{" "}
              </Typography>
              <Typography
                align="right"
                fontSize="x-small"
                color="accentPrimary"
              >
                풍투데이에서 2021.01 부터 수집된 데이터 입니다.
              </Typography>
              <Typography
                align="right"
                fontSize="x-small"
                color="accentPrimary"
              >
                방송국, 성인방송, 대결풍 및 누락 데이터는 집계에서 제외됩니다.
              </Typography>

              <Typography
                align="right"
                fontSize="x-small"
                color="accentPrimary"
              >
                풍투데이 데이터 이상시 제대로 표시되지 않습니다.
              </Typography>
            </>
          )}
          {/* 그룹: 가지고 있는 타이틀 */}
        </div>
      </CardContent>
    </Card>
  );
}
