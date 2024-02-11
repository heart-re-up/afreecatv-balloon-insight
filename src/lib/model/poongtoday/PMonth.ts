import "reflect-metadata";
import { Exclude, Expose, Type } from "class-transformer";
import { DateTime } from "luxon";
import { isEmpty } from "lodash";
import PDonor from "@/lib/model/poongtoday/PDonor";
import PCategory from "@/lib/model/poongtoday/PCategory";
import PDay from "@/lib/model/poongtoday/PDay";

export default class PMonth {
  @Exclude()
  private date: DateTime | null = null;

  @Exclude()
  private _error: string | null = null;

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

  /** 후원자 */
  @Type(() => PDonor)
  @Expose({ name: "f" })
  public readonly donors: Array<PDonor>;

  constructor(
    balloon: number,
    viewerCount: number,
    days: Array<PDay>,
    categories: Array<PCategory>,
    donors: Array<PDonor>,
  ) {
    this.balloon = balloon;
    this.viewerCount = viewerCount;
    this.days = days;
    this.categories = categories;
    this.donors = donors;
  }

  setDateTime(date: DateTime) {
    this.date = date;
  }

  getDateTime() {
    if (this.date == null) throw new Error("date is unset.");
    return this.date;
  }

  get error(): boolean {
    return !isEmpty(this._error);
  }

  set error(value: string | null) {
    this._error = value;
  }
}
