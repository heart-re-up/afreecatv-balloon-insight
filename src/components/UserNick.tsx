import { Typography } from "@mui/material";

export interface UserNickProps {
  userNick?: string;
  // error?: string;
  notExists: boolean;
}
export default function UserNick(props: UserNickProps) {
  const { userNick, notExists } = props;
  return notExists ? (
    <Typography color="error">(오류)</Typography>
  ) : (
    <Typography color="secondary">({userNick})</Typography>
  );
}
