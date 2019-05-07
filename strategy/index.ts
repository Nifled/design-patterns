import { Duck } from "./Duck/Duck";
import { NoQuackStrategy } from "./Duck/strategies/NoQuackStrategy";
import { NoFlyStrategy } from "./Duck/strategies/NoFlyStrategy";
import { SimpleFlyStrategy } from "./Duck/strategies/SimpleFlyStrategy";
import { SimpleQuackStrategy } from "./Duck/strategies/SimpleQuackStrategy";

const noFly = new NoFlyStrategy();
const noQuack = new NoQuackStrategy();
const rubber = new Duck(noFly, noQuack);
rubber.fly();
rubber.quack();


const simpleFly = new SimpleFlyStrategy();
const simpleQuack = new SimpleQuackStrategy();
const city = new Duck(simpleFly, simpleQuack);
city.fly();
city.quack();
