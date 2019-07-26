import { Light } from "./ILight";
import { HueControllerInvoker } from "./HueControllerInvoker";
import { LightOn } from "./commands/LightOn";
import { LightOff } from "./commands/LightOff";
import { LightDimUp } from "./commands/LightDimUp";
import { LightDimDown } from "./commands/LightDimDown";

/**
 * Command
 * 
 * Invoker => Command => Receiver
 */

// Will act as Receiver
const hueLightBulb: Light = {
  on: () => {
    console.log('LIGHT TURNED ON!')
  },

  off: () => {
    console.log('LIGHT TURNED OFF!')
  },

  dimUp: () => {
    console.log('LIGHT DIMMED UP!')
  },

  dimDown: () => {
    console.log('LIGHT DIMMED DOWN!')
  }
}

// Commands for our invoker
const onCommand = new LightOn(hueLightBulb);
const offCommand = new LightOff(hueLightBulb);
const dimUpCommand = new LightDimUp(hueLightBulb);
const dimDownCommand = new LightDimDown(hueLightBulb);

// Phillip's Hue controller (Invoker)
const invoker = new HueControllerInvoker(onCommand, offCommand, dimUpCommand, dimDownCommand);

// Call an invoker action aka press button on the controller
invoker.clickOn();
invoker.clickOn();
invoker.clickDimUp();
invoker.clickDimUp();
invoker.clickDimUp();
invoker.clickDimDown();
invoker.clickDimDown();
invoker.clickOff();
invoker.undo();
invoker.undo();
