import { maxBy, reduce } from "lodash";
import afreecatvApi, { BjStation } from "@afreecatv/api/dist";
import PDonor from "@/lib/model/poongtoday/PDonor";

export default class PDonorMerged {
  private readonly viewers: Array<PDonor>;

  public readonly userId: string;

  public readonly recentUserNick: string;

  public readonly balloonTotal: number;

  public station?: BjStation;

  constructor(userId: string, viewers: Array<PDonor>) {
    this.userId = userId;
    const maxPViewer = maxBy(viewers, (v) => v.date?.toMillis());
    this.recentUserNick = maxPViewer?.userSubNick ?? "unknown";
    this.viewers = viewers;
    this.balloonTotal = this.computeTotal();
  }

  private computeTotal() {
    return reduce(this.viewers, (prev, curr) => prev + curr.balloon, 0);
  }

  async loadStation() {
    this.station = await afreecatvApi().bj.getBjStation(this.userId);
  }
}
