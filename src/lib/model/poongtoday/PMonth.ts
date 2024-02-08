import { Expose, Type } from "class-transformer";
import { PViewer } from "@/lib/model/poongtoday/PViewer";
import { PCategory } from "@/lib/model/poongtoday/PCategory";
import { PDay } from "@/lib/model/poongtoday/PDay";

export class PMonth {
  /** 해당월 별풍선 개수 */
  @Expose({ name: "b" })
  public readonly balloon: number;

  /** 해당월 누적 시청자 */
  @Expose({ name: "v" })
  public readonly viewerCount: number;

  @Type(() => PDay)
  @Expose({ name: "d" })
  public readonly days: Array<PDay>;

  /** 방송 카테고리 */
  @Type(() => PCategory)
  @Expose({ name: "c" })
  public readonly categories: Array<PCategory>;

  /** 시청자 */
  @Type(() => PViewer)
  @Expose({ name: "f" })
  public readonly viewers: Array<PViewer>;

  constructor(
    balloon: number,
    viewerCount: number,
    days: Array<PDay>,
    categories: Array<PCategory>,
    viewers: Array<PViewer>,
  ) {
    this.balloon = balloon;
    this.viewerCount = viewerCount;
    this.days = days;
    this.categories = categories;
    this.viewers = viewers;
  }
}
