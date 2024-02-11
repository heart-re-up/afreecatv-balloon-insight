export type UserGrade = "manager" | "vip" | "supporter" | "fan";

export function getUserGradeText(userGrade?: UserGrade) {
  switch (userGrade) {
    case "manager":
      return "M";
    case "vip":
      return "열";
    case "supporter":
      return "S";
    case "fan":
      return "F";
    default:
      return "";
  }
}
