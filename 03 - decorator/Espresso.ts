import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  public cost(): number {
    return 3;
  }
}
