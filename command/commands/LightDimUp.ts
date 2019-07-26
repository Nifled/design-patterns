import { Command } from "../ICommand";
import { Light } from "../ILight";

export class LightDimUp implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.dimUp();
  }

  public unexecute(): void {
    this.light.dimDown();
  }
}
