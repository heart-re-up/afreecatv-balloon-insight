import { Exclude, Expose } from "class-transformer";
import "reflect-metadata";
import { DateTime } from "luxon";

export default class PViewer {
  @Exclude()
  private _date: DateTime | null = null;

  @Expose({ name: "i" })
  public readonly userId: string;

  @Expose({ name: "n" })
  public readonly userSubNick: string;

  @Exclude()
  private _userNick: string = "";

  @Expose({ name: "b" })
  public readonly balloon: number;

  @Expose({ name: "c" })
  public readonly count: number;

  constructor(id: string, userSubNick: string, balloon: number, count: number) {
    this.userId = id;
    this.userSubNick = userSubNick;
    this.balloon = balloon;
    this.count = count;
  }

  get date(): DateTime | null {
    if (this._date === undefined || this._date == null)
      throw new Error("date is unset.");
    return this._date;
  }

  setDate(value: DateTime | null) {
    this._date = value;
  }

  get userNick(): string {
    return this._userNick;
  }

  set userNick(value: string) {
    this._userNick = value;
  }
}
