import "reflect-metadata";
import detail from "@/lib/api/poongtoday/bj/detail";
import detailAll from "@/lib/api/poongtoday/bj/detailAll";

export default function poongtoday() {
  return { bj: { detail, detailAll } };
}
