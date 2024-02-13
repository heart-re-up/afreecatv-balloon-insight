"use client";

import { useMemo } from "react";
import { find, map, sortBy } from "lodash";
import { Skeleton } from "@mui/material";
import useQueryBalloon from "@/queries/useQueryBalloon";
import DonorChartByMonths from "@/components/chart/DonorChartByMonths";
import PMonth from "@/lib/model/poongtoday/PMonth";

export interface DonorGraphProps {
  streamerId: string;
  donorId: string;
}

export default function DonorGraph(props: DonorGraphProps) {
  const { streamerId, donorId } = props;
  const { data = [], isLoading } = useQueryBalloon(streamerId);
  // 월데이터에서 특정 데이터 추출
  const extractBySpecificDonor = (m: PMonth) => {
    const date = m.getDateTime().toFormat("yyyy-MM");
    const donor = find(m.donors, (d) => d.userId === donorId);
    const balloon = donor?.balloon ?? 0;
    return {
      date,
      balloon,
    };
  };
  // extract by donor
  const barData = useMemo(
    () => map(data, extractBySpecificDonor),
    [extractBySpecificDonor, donorId, data],
  );
  // sort by date
  const sortedBarData = useMemo(
    () => sortBy(barData, (d) => d.date),
    [barData],
  );
  return isLoading ? (
    <Skeleton variant="rectangular" width="100%" height={400} />
  ) : (
    <DonorChartByMonths
      keys={["balloon"]}
      indexBy="date"
      data={sortedBarData}
    />
  );
}
