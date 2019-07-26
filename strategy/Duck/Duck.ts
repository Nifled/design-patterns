import { IFlyStrategy } from './strategies/IFlyStrategy'
import { IQuackStrategy } from './strategies/IQuackStrategy'
import { IDisplayStrategy } from './strategies/IDisplayStrategy'

export class Duck {
  private _flyStrategy: IFlyStrategy;
  private _quackStrategy: IQuackStrategy;
  private _displayStrategy: IDisplayStrategy | undefined;

  constructor(flyStrategy: IFlyStrategy, quackStrategy: IQuackStrategy, displayStrategy?: IDisplayStrategy) {
    this._flyStrategy = flyStrategy;
    this._quackStrategy = quackStrategy;
    this._displayStrategy = displayStrategy;
  }

  public fly(): void {
    this._flyStrategy.fly();
  }

  public quack(): void {
    this._quackStrategy.quack();
  }
}
