import { Command } from "../ICommand";
import { Light } from "../ILight";

export class LightDimDown implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.dimDown();
  }

  public unexecute(): void {
    this.light.dimUp();
  }
}
