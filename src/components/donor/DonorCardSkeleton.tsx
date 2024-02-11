import { Card, Skeleton, Typography } from "@mui/material";

export default function DonorCardSkeleton({ index }: { index: number }) {
  return (
    <Card className="p-4 flex flex-row gap-x-4 justify-start items-center">
      <Typography>{index + 1}</Typography>
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex-1 flex flex-col gap-1">
        <Skeleton variant="text" width={120} height={30} />
        <Skeleton variant="text" width={120} height={30} />
      </div>
    </Card>
  );
}
