import { filter, flatMap, groupBy, map, sortBy } from "lodash";
import CollectedViewer from "@/lib/model/poongtoday/CollectedViewer";
import PMonth from "@/lib/model/poongtoday/PMonth";

export default function collectViewers(...months: PMonth[]) {
  const notNullMonths = filter(months, (month) => !month.error);
  const viewers = flatMap(notNullMonths, (month) => month.viewers);
  const group = groupBy(viewers, "userId");
  const mapped = map(
    group,
    (value, userId) => new CollectedViewer(userId, value),
  );
  return sortBy(mapped, (value) => value.balloonTotal).reverse();
}
