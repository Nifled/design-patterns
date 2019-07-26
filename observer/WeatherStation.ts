import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class WeatherStation implements IObservable {
  private _observers: IObserver[] = [];
  private _temperature: number = Math.random() * 100 + 1;

  public registerObserver(observer: IObserver): void {
    this._observers = this._observers.concat(observer);
  }

  public removeObserver(observer: IObserver): void {
    this._observers = this._observers.filter(ob => ob.id !== observer.id);
  }

  /**
   * Iterate over all observers and update each one.
   */
  public notify(): void {
    this._observers.forEach((observer: IObserver) => {
      observer.update();
    });
  }

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    this._temperature = value;
  }
}
