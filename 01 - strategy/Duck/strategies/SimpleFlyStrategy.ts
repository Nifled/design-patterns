import { IFlyStrategy } from "./IFlyStrategy";

export class SimpleFlyStrategy implements IFlyStrategy {
  fly() {
    console.log('SIMPLE FLYING HIGH V');
  }
}
