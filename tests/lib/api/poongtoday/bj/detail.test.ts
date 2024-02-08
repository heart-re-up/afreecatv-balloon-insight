import "reflect-metadata";
import { poongtoday } from "@/lib/api/poongtoday";

const {
  bj: { detail },
} = poongtoday();

describe("poongtoday", () => {
  test("bj.detail", async () => {
    const response = await detail("sol3712", 2024, 2);
    console.log(response);
  });
});
