import { Avatar, Typography } from "@mui/material";
import { ISuggestBj } from "@afreecatv/api";
import StreamerListItem, {
  StreamerListItemProps,
} from "@/components/afreeca/StreamerListItem";

export interface StreamerListProps {
  streamers: Array<ISuggestBj>;
  onClick?: (streamer: ISuggestBj) => void;
}

export default function StreamerList(props: StreamerListProps) {
  const { streamers, onClick } = props;
  const renderItem = (streamer: ISuggestBj) => (
    <li key={streamer.user_id}>
      <StreamerListItem streamer={streamer} onClick={onClick} />
    </li>
  );

  return <ul className="space-y-1">{streamers.map(renderItem)}</ul>;
}
