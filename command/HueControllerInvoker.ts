import { Command } from "./ICommand";

// Concrete implementation for the invoker
export class HueControllerInvoker {
  private _on: Command;
  private _off: Command;
  private _dimUp: Command;
  private _dimDown: Command;

  private _commandStack: Command[] = [];

  constructor(on: Command, off: Command, dimUp: Command, dimDown: Command) {
    this._on = on;
    this._off = off;
    this._dimUp = dimUp;
    this._dimDown = dimDown;
  }

  public executeCommand(command: Command) {
    command.execute();
    this._commandStack = [...this._commandStack, command]
  }

  public clickOn(): void {
    this.executeCommand(this._on);
  }

  public clickOff(): void {
    this.executeCommand(this._off);
  }

  public clickDimUp(): void {
    this.executeCommand(this._dimUp);
  }

  public clickDimDown(): void {
    this.executeCommand(this._dimDown);
  }

  public undo(): void {
    const command = this._commandStack[this._commandStack.length - 1];

    if (command) {
      console.log('COMMAND UNDONE...')
      command.unexecute();
      this._commandStack = this._commandStack.slice(0, this._commandStack.length - 1);
    } else {
      console.log('Nothing to undo!');
    }
  }
}
