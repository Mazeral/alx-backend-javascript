# README for 0x00-ES6_basic

This repository contains JavaScript tasks that focus on ES6 features. The tasks demonstrate the application of various concepts, including `const`, `let`, block scope, arrow functions, parameter defaults, rest parameters, spread syntax, template literals, shorthand object properties, computed property names, and method properties. Below is a detailed description of each task:

## Task 0: Const or let?
This task involves modifying two functions:
- `taskFirst()` uses `const` to declare variables.
- `taskNext()` uses `let` to declare variables.
By using `const`, the value of the variable `task` is fixed, while `let` allows the variable `combination` to be reassigned.

### Example:
```js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);
```

### Output:
```
I prefer const when I can. But sometimes let is okay
```

## Task 1: Block Scope
The objective here is to modify the function `taskBlock()` to prevent variables declared inside a block from being overwritten outside the block. The solution ensures that the variables are scoped within the block using `let` or `const`.

### Example:
```js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
```

### Output:
```
[ false, true ]
[ false, true ]
```

## Task 2: Arrow Functions
This task rewrites the traditional function `add` to an arrow function. It eliminates the need for `self` as the arrow function automatically binds `this`.

### Example:
```js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
```

### Output:
```
[ 'SOMA', 'Union Square', 'Noe Valley' ]
```

## Task 3: Parameter Defaults
This task simplifies the function `getSumOfHoods()` by using default parameters for `expansion1989` and `expansion2019`.

### Example:
```js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
```

### Output:
```
142
56
41
```

## Task 4: Rest Parameter Syntax
This task uses the rest parameter syntax to count how many arguments are passed to a function.

### Example:
```js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
```

### Output:
```
1
4
```

## Task 5: The Wonders of Spread Syntax
In this task, the `concatArrays()` function concatenates two arrays and a string by spreading each element.

### Example:
```js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
```

### Output:
```
[ 'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o' ]
```

## Task 6: Take Advantage of Template Literals
The goal here is to rewrite a return statement using ES6 template literals for better readability.

### Example:
```js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());
```

### Output:
```
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
```

## Task 7: Object Property Value Shorthand Syntax
This task modifies the `getBudgetObject()` function to use ES6 shorthand syntax for object properties.

### Example:
```js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));
```

### Output:
```
{ income: 400, gdp: 700, capita: 900 }
```

## Task 8: Computed Property Names
The task modifies the `getBudgetForCurrentYear()` function to use computed property names, dynamically generating object keys based on the current year.

### Example:
```js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));
```

### Output:
```
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
```

## Task 9: ES6 Method Properties
This task rewrites the `getFullBudgetObject()` to use ES6 method properties, simplifying the function syntax.

### Example:
```js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
```

### Output:
```
$20
20 euros
```

## Task 10: For...of Loops
In this task, the function `appendToEachArrayValue()` is rewritten using ES6’s `for...of` loop instead of a traditional `for` loop with `var`.

### Example:
```js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
```

### Output:
```
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
```

## Task 11: Iterator
This task defines the function `createEmployeesObject()` which creates an object with a department name and a list of employees.

### Example:
```js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
```

### Output:
```
{ Software: [ 'Bob', 'Sylvie' ] }
```

## Task 12: Report Object
The `createReportObject()` function creates a report object that includes a list of employees and the ability to retrieve the number of departments.

---

## Author
Mohammad Omar Siddiq
