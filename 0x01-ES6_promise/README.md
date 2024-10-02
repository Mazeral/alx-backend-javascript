# ES6 Promises - Tasks

This repository contains JavaScript code to demonstrate the usage of Promises and asynchronous programming concepts. Each task is implemented as per the specified requirements.

Author: **Mohammad Omar Siddiq**

---

## Task Descriptions

### 0. Keep every promise you make and only make promises you can keep
**File**: `0-promise.js`

**Objective**: Return a Promise using the prototype function `getResponseFromAPI()`.

```js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
```

---

### 1. Don't make a promise...if you know you can't keep it
**File**: `1-promise.js`

**Objective**: 
- Return a promise based on a boolean parameter. 
  - If `true`, resolve with an object `{ status: 200, body: 'Success' }`.
  - If `false`, reject with an error message `The fake API is not working currently`.

```js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

---

### 2. Catch me if you can!
**File**: `2-then.js`

**Objective**: 
- Handle a resolved or rejected promise.
  - If resolved, return `{ status: 200, body: 'success' }`.
  - If rejected, return an empty error object.
  - Log `Got a response from the API` for every resolution.

```js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

---

### 3. Handle multiple successful promises
**File**: `3-all.js`

**Objective**: 
- Collectively resolve multiple promises (`uploadPhoto` and `createUser`).
- Log `photo firstName lastName` on success, and log `Signup system offline` on error.

```js
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

---

### 4. Simple promise
**File**: `4-user-promise.js`

**Objective**: 
- Create a function `signUpUser` that returns a resolved promise with the object `{ firstName: value, lastName: value }`.

```js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

---

### 5. Reject the promises
**File**: `5-photo-reject.js`

**Objective**: 
- Create a function `uploadPhoto` that returns a rejected promise with an error message in the format `${fileName} cannot be processed`.

```js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

---

### 6. Handle multiple promises
**File**: `6-final-user.js`

**Objective**: 
- Combine the `signUpUser` and `uploadPhoto` functions.
- Return an array of objects indicating the status of each promise and its result or error.

```js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

---

### 7. Load balancer
**File**: `7-load_balancer.js`

**Objective**: 
- Write a function `loadBalancer` that accepts two promises and returns the result of the first resolved promise.

```js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise((resolve) => setTimeout(resolve, 100, ukSuccess));
const promiseFR = new Promise((resolve) => setTimeout(resolve, 200, frSuccess));

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
};

test();
```

---

### 8. Throw error / try catch
**File**: `8-try.js`

**Objective**: 
- Create a function `divideFunction` that throws an error if the denominator is `0`, otherwise returns the result of division.

```js
import divideFunction from './8-try';

console.log(divideFunction(10, 2)); // 5
console.log(divideFunction(10, 0)); // Error: cannot divide by 0
```

---

### 9. Throw an error
**File**: `9-try.js`

**Objective**: 
- Write a function `guardrail` that wraps a function and handles errors gracefully, appending the result or error to an array.

```js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => divideFunction(10, 2))); // [ 5, 'Guardrail was processed' ]
console.log(guardrail(() => divideFunction(10, 0))); // [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
```

---

### 10. Await / Async
**File**: `100-await.js`

**Objective**: 
- Create an async function `asyncUploadUser` that calls `uploadPhoto` and `createUser`.
- Return an object with the results, or return `{ photo: null, user: null }` if an error occurs.

```js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
```

---

## Repository Information

**GitHub Repository**: [alx-backend-javascript](https://github.com/your-repo-link)

**Directory**: `0x01-ES6_promise`

--- 

This concludes the explanation of tasks in the **ES6 Promises** project.
