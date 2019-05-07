import { IFlyStrategy } from "./IFlyStrategy";

export class JetFlyStrategy implements IFlyStrategy {
  fly() {
    console.log('JET FLYING HIGH V');
  }
}
