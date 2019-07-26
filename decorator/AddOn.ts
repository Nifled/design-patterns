import { Beverage } from "./Beverage";

/**
 * Base Decorator
 */
export abstract class AddOn extends Beverage {
  public abstract cost(): number;
}
