"use client";

import { Button } from "@mui/material";
import useQueryStation from "@/queries/useQueryStation";
import DonorCardSkeleton from "@/components/donor/DonorCardSkeleton";
import DonorCardLoaded from "@/components/donor/DonorCardLoaded";

export interface ViewerCardProps {
  index: number; // start from 0
  userId: string;
  userNickPoongtoday: string;
  balloon: number;
  showNickStation?: boolean;
  onClick?: (donorId: string) => void;
}

export default function DonorCard(props: ViewerCardProps) {
  const {
    index,
    userId,
    userNickPoongtoday,
    balloon,
    showNickStation,
    onClick,
  } = props;
  const { data, isLoading, isError } = useQueryStation(userId);
  const handleClick = () => onClick?.(userId);
  return isLoading ? (
    <DonorCardSkeleton index={index} />
  ) : (
    <Button className="w-full" onClick={handleClick}>
      <DonorCardLoaded
        index={index}
        userId={userId}
        userNickPoongtoday={userNickPoongtoday}
        userNickStation={data?.station.userNick}
        avatarUrl={data?.profileImage}
        balloon={balloon}
        showNickStation={showNickStation}
        isError={isError}
      />
    </Button>
  );
}
