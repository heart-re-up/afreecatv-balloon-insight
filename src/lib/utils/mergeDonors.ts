import { filter, flatMap, groupBy, map, sortBy } from "lodash";
import PDonorMerged from "@/lib/model/poongtoday/PDonorMerged";
import PMonth from "@/lib/model/poongtoday/PMonth";

/**
 * 풍투데이로 부터 수신한 월 데이터 배열에서 후원자를 수집합니다.
 * @param months
 */
export default function mergeDonors(...months: PMonth[]) {
  const notNullMonths = filter(months, (month) => !month.error);
  const viewers = flatMap(notNullMonths, (month) => month.donors);
  const groupByNormalizedUserId = groupBy(viewers, (v) => v.normalizedUserId());
  const mapped = map(
    groupByNormalizedUserId,
    (value, normalizedUserId) => new PDonorMerged(normalizedUserId, value),
  );
  return sortBy(mapped, (value) => value.balloonTotal).reverse();
}
