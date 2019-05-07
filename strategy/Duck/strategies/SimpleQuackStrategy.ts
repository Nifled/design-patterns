import { IQuackStrategy } from "./IQuackStrategy";

export class SimpleQuackStrategy implements IQuackStrategy {
  quack() {
    console.log('SIMPLE QUACKER, QUACK QUACK');
  }
}
