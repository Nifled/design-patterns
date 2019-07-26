import { AddOn } from "../AddOn";
import { Beverage } from "../Beverage";
import { priceTable } from '../utils';

export class NonFat extends AddOn {
  private _beverage: Beverage;
  private _cost = priceTable.nonFat;

  constructor(beverage: Beverage) {
    super();

    this._beverage = beverage;
  }

  public cost(): number {
    return this._beverage.cost() + this._cost;
  }
}
