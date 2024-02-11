// url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'%3e%3crect width='14' height='14' fill='%23D65B8F' rx='2'/%3e%3cpath fill='%23fff' d='M3 4.823c0 1.282 1.06 2.09 2.395 2.09 1.397 0 2.405-.84 2.405-2.09 0-1.27-1.008-2.174-2.405-2.174C4.008 2.649 3 3.573 3 4.823Zm1.197 0c0-.64.536-1.155 1.198-1.155.745 0 1.197.514 1.197 1.155 0 .567-.462 1.071-1.197 1.071-.714 0-1.198-.451-1.198-1.07ZM11 7.173V2.075H9.8v1.1H8.333l.022 1.135H9.8v1.021H8.355l-.022 1.064H9.8v.778H11Zm0 4.752v-1.02H5.875v-.67H11V7.623H4.525v1.01h5.202v.67H4.58v2.622H11Z'/%3e%3c/svg%3e") 50% 50% no-repeat

import styled from "@emotion/styled";
import clsx from "clsx";
import classes from "./UserBadge.module.scss";
import { getUserGradeText, UserGrade } from "@/lib/model/afreecatv/UserGrade";

const UserBadgeBase = styled.span(() => ({
  width: "1rem",
  height: "0.75rem",
  padding: "0.1rem 0.2rem",
  fontSize: "0.5rem",
  borderRadius: "0.25rem",
}));

export interface UserBadgeProps {
  grade?: UserGrade;
}

export default function UserBadge(props: UserBadgeProps) {
  const { grade } = props;
  const text = getUserGradeText(grade);
  const resolvedClasses = clsx(
    classes.badge,
    grade === "manager" && classes.manager,
    grade === "vip" && classes.vip,
    grade === "supporter" && classes.supporter,
    grade === "fan" && classes.fan,
  );
  return <UserBadgeBase className={resolvedClasses}>{text}</UserBadgeBase>;
}
