import { Expose } from "class-transformer";

export class PCategory {
  // category number 00130000 => 13
  @Expose({ name: "m" })
  public readonly method: number;

  public readonly s: number;

  @Expose({ name: "t" })
  public readonly time: number;

  @Expose({ name: "b" })
  public readonly balloon: number;

  constructor(method: number, s: number, time: number, balloon: number) {
    this.method = method;
    this.s = s;
    this.time = time;
    this.balloon = balloon;
  }
}
