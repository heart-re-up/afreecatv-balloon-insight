import { Avatar, Button, Card, Typography } from "@mui/material";
import { SuggestBj } from "@afreecatv/api";
import useQueryStation from "@/queries/useQueryStation";
import formatNumber from "@/lib/utils/format";

export interface StreamerListItemProps {
  streamer: SuggestBj;
  onClick?: (streamer: SuggestBj) => void;
}

export default function StreamerSearchResult(props: StreamerListItemProps) {
  const { streamer, onClick } = props;
  const { data: station } = useQueryStation(streamer.userId);
  return (
    <Card>
      <Button
        className="w-full px-4 flex flex-row justify-start align-center gap-x-4"
        onClick={() => onClick?.(streamer)}
      >
        <Avatar src={streamer.stationLogo ?? ""} />
        <div className="flex-1 flex flex-col align-top justify-center">
          <Typography textAlign="start">{streamer.userNick}</Typography>
          <Typography textAlign="start" color="gray" fontSize="smaller">
            {streamer.userId}
          </Typography>
        </div>
        <div>
          <div className="flex justify-between">
            {/* 애청자 수 */}
            <Typography fontSize="xx-small">
              즐찾 {formatNumber(station?.station.upd.fanCnt ?? 0)}
            </Typography>
          </div>
        </div>
      </Button>
    </Card>
  );
}
