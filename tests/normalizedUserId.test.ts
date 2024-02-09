import { NORMALIZE_USER_ID } from "@/lib/regex";

describe("normalizedUserId", () => {
  test("normalizedUserId", () => {
    const tokens = ["devking", "devking(1)", "basxz1"];
    const actual = "devking";
    for (const token of tokens) {
      console.log(token, "=>", token.match(NORMALIZE_USER_ID)?.[0]);
    }
  });
});
