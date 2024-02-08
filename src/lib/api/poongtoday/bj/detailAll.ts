import { DateTime } from "luxon";
import detail from "@/lib/api/poongtoday/bj/detail";

const START = DateTime.local(2021, 1); // 풍투데이가 데이터를 제공하기 시작한 날짜
export default async function detailAll(id: string) {
  const now = DateTime.now();
  const diff = Math.floor(now.diff(START, "months").months) + 1; // 개월차에 +1을 해서 기간을 구한다
  const promises = [...new Array(diff)].map((_, index) => {
    const date = now.minus({ months: index });
    const year = date.get("year");
    const month = date.get("month");
    return detail(id, year, month);
  });
  return Promise.all(promises);
}
