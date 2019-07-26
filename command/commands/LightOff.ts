import { Command } from "../ICommand";
import { Light } from "../ILight";

export class LightOff implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public unexecute(): void {
    this.light.on();
  }
}
