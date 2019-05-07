import { IQuackStrategy } from "./IQuackStrategy";

export class NoQuackStrategy implements IQuackStrategy {
  public quack() {
    console.log('I CANT QUACK');
  }
}
