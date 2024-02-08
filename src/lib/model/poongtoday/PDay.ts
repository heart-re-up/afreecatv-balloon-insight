import { Expose } from "class-transformer";
import "reflect-metadata";

export default class PDay {
  @Expose({ name: "d" })
  public readonly day: string; // d

  @Expose({ name: "b" })
  public readonly balloonCount: number; // b

  @Expose({ name: "m" })
  public readonly viewerCountOfSameTime: number; // m

  @Expose({ name: "u" })
  public readonly upCount: number; // u

  @Expose({ name: "s" })
  public readonly changedSubscriberCount: number; // s

  @Expose({ name: "fc" })
  public readonly changedFanClubCount: number; // fc

  @Expose({ name: "sp" })
  public readonly changedSupporterCount: number; // sp

  @Expose({ name: "v" })
  public readonly changedViewerCount: number; // v

  @Expose({ name: "f" })
  public readonly changedFavoriteCount: number; // f

  constructor(
    day: string,
    balloonCount: number,
    viewerCountOfSameTime: number,
    upCount: number,
    changedSubscriberCount: number,
    changedFanClubCount: number,
    changedSupporterCount: number,
    changedViewerCount: number,
    changedFavoriteCount: number,
  ) {
    this.day = day;
    this.balloonCount = balloonCount;
    this.viewerCountOfSameTime = viewerCountOfSameTime;
    this.upCount = upCount;
    this.changedSubscriberCount = changedSubscriberCount;
    this.changedFanClubCount = changedFanClubCount;
    this.changedSupporterCount = changedSupporterCount;
    this.changedViewerCount = changedViewerCount;
    this.changedFavoriteCount = changedFavoriteCount;
  }
}
