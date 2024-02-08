import { reduce } from "lodash";
import PViewer from "@/lib/model/poongtoday/PViewer";

export default class CollectedViewer {
  private readonly viewers: Array<PViewer>;

  private readonly userId: string;

  public readonly balloonTotal: number;

  constructor(userId: string, viewers: Array<PViewer>) {
    this.userId = userId;
    this.viewers = viewers;
    this.balloonTotal = this.computeTotal();
  }

  private computeTotal() {
    return reduce(this.viewers, (prev, curr) => prev + curr.balloon, 0);
  }
}
