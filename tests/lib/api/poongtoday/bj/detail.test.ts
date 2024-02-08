import { flatMap } from "lodash";
import detailAll from "@/lib/api/poongtoday/bj/detailAll";
import poongtoday from "@/lib/api/poongtoday";
import collectViewers from "@/lib/utils/collectViewers";

const {
  bj: { detail },
} = poongtoday();

describe("poongtoday", () => {
  test("bj.detail", async () => {
    const response = await detail("sol3712", 2024, 2);
    console.log(response);
  });
  test("bj.detailAll", async () => {
    const response = await detailAll("dm0229");
    console.log(response);
    const collectedViewers = collectViewers(...response);
    console.log(collectedViewers);
  });
});
