import { plainToInstance } from "class-transformer";
import { DateTime } from "luxon";
import PMonth from "@/lib/model/poongtoday/PMonth";

export default async function detail(id: string, year: number, month: number) {
  const url = `https://poong.today/bj/detail/get?id=${id}&year=${year}&month=${month}`;
  const response = await fetch(url);
  const json = await response.json();
  const result = plainToInstance(PMonth, json as NonNullable<unknown>);
  const date = DateTime.local(year, month);
  result.setDateTime(date);
  result.error = json.error;
  if (!result.error) result.donors.forEach((v) => v.setDate(date));
  return result;
}
