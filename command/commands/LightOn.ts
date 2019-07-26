import { Command } from "../ICommand";
import { Light } from "../ILight";

export class LightOn implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public unexecute(): void {
    this.light.off();
  }
}
