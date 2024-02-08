import { Expose } from "class-transformer";

export class PViewer {
  @Expose({ name: "i" })
  public readonly id: string;

  @Expose({ name: "n" })
  public readonly name: string;

  @Expose({ name: "b" })
  public readonly balloon: number;

  @Expose({ name: "c" })
  public readonly count: number;

  constructor(id: string, name: string, balloon: number, count: number) {
    this.id = id;
    this.name = name;
    this.balloon = balloon;
    this.count = count;
  }
}
