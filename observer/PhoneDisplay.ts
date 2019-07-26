import { IObserver } from "./IObserver";
import { IDisplay } from "./IDisplay";
import { WeatherStation } from "./WeatherStation";

export class PhoneDisplay implements IObserver, IDisplay {
  private _weatherStation: WeatherStation;
  private _id: number;

  constructor(id: number, weatherStation: WeatherStation) {
    this._id = id;
    this._weatherStation = weatherStation;
  }

  public update(): void {
    console.log('Temperature has updated...');
    this.display();
  }

  public display(): void {
    console.log('PHONE DISPLAY');
    console.log('////////////////////////');
    console.log(`It's ${this._weatherStation.temperature} degrees outside.`);
    console.log('////////////////////////');
  }

  get id(): number {
    return this._id;
  }
}
