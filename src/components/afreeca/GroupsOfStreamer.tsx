import { Chip } from "@mui/material";
import { Group } from "@afreecatv/api";
import { sortBy } from "lodash";

export interface GroupsOfStreamerProps {
  groups?: Array<Group>;
}
export default function GroupsOfStreamer({ groups }: GroupsOfStreamerProps) {
  return (
    <div className="flex flex-row gap-x-1 justify-start items-center">
      {sortBy(groups, (g) => g.priority).map((group) => (
        <Chip
          key={group.groupNo}
          label={group.info.groupName}
          size="small"
          sx={{ backgroundColor: group.info.groupBackgroundColor }}
        />
      ))}
    </div>
  );
}
