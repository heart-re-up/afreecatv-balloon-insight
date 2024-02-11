import {
  Avatar,
  Card,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import RadioIcon from "@mui/icons-material/Radio";
import useQueryStation from "@/queries/useQueryStation";
import GroupsOfStreamer from "@/components/afreeca/GroupsOfStreamer";

export interface StreamerCardHeaderProps {
  userId: string;
}

export default function StreamerCardHeader(props: StreamerCardHeaderProps) {
  const { userId } = props;
  const { data, isLoading } = useQueryStation(userId);
  const rendered = (
    <div className="flex flex-row gap-x-4 justify-start items-center">
      <Avatar src={data?.profileImage} variant="circular" />
      <div className="flex-1">
        <Typography variant="h5">{data?.station?.userNick}</Typography>
        <Typography variant="subtitle1">{userId}</Typography>
      </div>
      <Tooltip title="방송국가기">
        <IconButton
          onClick={() => window.open(`https://bj.afreecatv.com/${userId}`)}
        >
          <RadioIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
  const loading = (
    <div className="flex flex-row gap-x-4 justify-start items-center">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="">
        <Skeleton variant="text" width={80} height={40} />
        <Skeleton variant="text" width={80} height={30} />
      </div>
    </div>
  );
  return (
    <Card className="flex flex-col gap-y-1">
      {isLoading ? loading : rendered}
      <GroupsOfStreamer groups={data?.station.groups} />
    </Card>
  );
}
