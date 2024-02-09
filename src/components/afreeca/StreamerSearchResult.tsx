import { Avatar, Button, Card, Typography } from "@mui/material";
import { SuggestBj } from "@afreecatv/api";

export interface StreamerListItemProps {
  streamer: SuggestBj;
  onClick?: (streamer: SuggestBj) => void;
}

export default function StreamerSearchResult(props: StreamerListItemProps) {
  const { streamer, onClick } = props;
  return (
    <Card>
      <Button
        className="w-full px-4 flex flex-row justify-start align-center gap-x-4"
        onClick={() => onClick?.(streamer)}
      >
        <Avatar src={streamer.stationLogo ?? ""} />
        <div className="flex flex-col align-top justify-center">
          <Typography textAlign="start">{streamer.userNick}</Typography>
          <Typography color="gray" fontSize="smaller">
            {streamer.userId}
          </Typography>
        </div>
      </Button>
    </Card>
  );
}
