import { SuggestBj } from "@afreecatv/api";
import StreamerSearchResult from "@/components/afreeca/StreamerSearchResult";

export interface StreamerListProps {
  streamers: Array<SuggestBj>;
  onClick?: (streamer: SuggestBj) => void;
}

export default function StreamerSearchResultList(props: StreamerListProps) {
  const { streamers, onClick } = props;
  const renderItem = (streamer: SuggestBj) => (
    <li key={streamer.userId}>
      <StreamerSearchResult streamer={streamer} onClick={onClick} />
    </li>
  );

  return <ul className="space-y-1">{streamers.map(renderItem)}</ul>;
}
