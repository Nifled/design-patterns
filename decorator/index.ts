/**
 * PRICE TABLE
 * 
 *                $
 * Espresso     - 3
 * Decaf        - 4
 * 
 * ADD-ONS
 * Caramel      - 1
 * Chocolate    - 2
 * Soy          - 1
 * Non-fat      - 3
 * Vanilla      - 2
 */

import { Beverage } from './Beverage';
import { Espresso } from './Espresso';
import { Decaf } from './Decaf';
import { Caramel } from './decorators/Caramel';
import { Chocolate } from './decorators/Chocolate';
import { Vanilla } from './decorators/Vanilla';

// Concrete Beverage classes
const espresso = new Espresso();
const decaf = new Decaf();

const espressoWithCaramel = new Caramel(espresso);
console.log(`$${espressoWithCaramel.cost()}`); // $4

const espressoWithCaramelWithChocolate = new Chocolate(espressoWithCaramel);
console.log(`$${espressoWithCaramelWithChocolate.cost()}`); // $6

const decafWithVanilla = new Vanilla(decaf);
console.log(`$${decafWithVanilla.cost()}`); // $6
