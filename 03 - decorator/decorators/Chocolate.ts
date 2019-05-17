import { AddOn } from "../AddOn";
import { Beverage } from "../Beverage";
import { priceTable } from '../utils';

export class Chocolate extends AddOn {
  private _beverage: Beverage;
  private _cost = priceTable.chocolate;

  constructor(beverage: Beverage) {
    super();

    this._beverage = beverage;
  }

  public cost(): number {
    return this._beverage.cost() + this._cost;
  }
}
