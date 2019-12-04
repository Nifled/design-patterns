import { ITarget } from "./ITarget";

export class Adapter implements ITarget {
  private adaptee: IAdaptee;

  constructor(a: IAdaptee) {
    this.adaptee = a;
  }

  // This is required for all ITargets. Any special or 
  // specific code can be run within the method itself.
  public request() {
    // Adaptee's implementation is what you want your `target.request`'s 
    // to eventually call instead of, say, legacy code.
    this.adaptee.do();
  }
};
