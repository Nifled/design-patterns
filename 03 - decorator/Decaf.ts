import { Beverage } from "./Beverage";

export class Decaf extends Beverage {
  public cost(): number {
    return 4;
  }
}
