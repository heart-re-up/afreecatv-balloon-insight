import { plainToInstance } from "class-transformer";
import { PMonth } from "@/lib/model/poongtoday/PMonth";

export default async function detail(id: string, year: number, month: number) {
  const url = `https://poong.today/bj/detail/get?id=${id}&year=${year}&month=${month}`;
  const response = await fetch(url);
  const json = await response.json();
  return plainToInstance(PMonth, json);
}
