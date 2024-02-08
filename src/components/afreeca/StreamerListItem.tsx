import { Avatar, Button, Card, Typography } from "@mui/material";
import { ISuggestBj } from "@afreecatv/api";

export interface StreamerListItemProps {
  streamer: ISuggestBj;
  onClick?: (streamer: ISuggestBj) => void;
}

export default function StreamerListItem(props: StreamerListItemProps) {
  const { streamer, onClick } = props;
  return (
    <Card>
      <Button
        className="w-full px-4 flex flex-row justify-start align-center gap-x-4"
        onClick={() => onClick?.(streamer)}
      >
        <Avatar src={streamer.station_logo ?? ""} />
        <div className="flex flex-col align-top justify-center">
          <Typography textAlign="start">{streamer.user_nick}</Typography>
          <Typography color="gray" fontSize="smaller">
            {streamer.user_id}
          </Typography>
        </div>
      </Button>
    </Card>
  );
}
