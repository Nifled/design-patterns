import { WeatherStation } from './WeatherStation';
import { PhoneDisplay } from "./PhoneDisplay";
import { LcdDisplay } from "./LcdDisplay";
import { updateEvery } from './utils';


const weatherStation = new WeatherStation();

const phoneDisplay = new PhoneDisplay(123, weatherStation);
const lcdDisplay = new LcdDisplay(456, weatherStation);

weatherStation.registerObserver(phoneDisplay);
weatherStation.registerObserver(lcdDisplay);

// simulate a weather station firing off weather updates
updateEvery(3000, () => {
  const randomeTemp = Math.random() * 100 + 1;
  weatherStation.temperature = randomeTemp;

  weatherStation.notify();
});
