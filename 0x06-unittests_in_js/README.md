# README - 0x06-unittests_in_js

Welcome to **0x06-unittests_in_js**! This project focuses on writing robust unit and integration tests using tools like Mocha, Chai, and Sinon. The tasks are designed to improve your ability to write effective test cases and understand testing methodologies for JavaScript applications.

## Learning Objectives

- Writing unit tests for JavaScript functions
- Using Mocha as a test runner
- Using Chai for behavior-driven assertions
- Employing Sinon for spies, stubs, and mocks
- Testing asynchronous code
- Creating integration tests for APIs

---

## Table of Contents

1. [Task 0: Basic Test with Mocha](#task-0-basic-test-with-mocha)
2. [Task 1: Combining Descriptions](#task-1-combining-descriptions)
3. [Task 2: Basic Test Using Chai](#task-2-basic-test-using-chai)
4. [Task 3: Spies](#task-3-spies)
5. [Task 4: Stubs](#task-4-stubs)
6. [Task 5: Hooks](#task-5-hooks)
7. [Task 6: Async Tests with Done](#task-6-async-tests-with-done)
8. [Task 7: Skipping Tests](#task-7-skipping-tests)
9. [Task 8: Basic Integration Testing](#task-8-basic-integration-testing)
10. [Task 9: Regex Integration Testing](#task-9-regex-integration-testing)

---

### Task 0: Basic Test with Mocha

- **Files**: `0-calcul.js`, `0-calcul.test.js`
- **Goal**: Write a function `calculateNumber` that rounds two numbers and returns their sum. Create a test suite to validate its functionality using Mocha and the `assert` module.

**Run Test**:
```bash
npm test 0-calcul.test.js
```

---

### Task 1: Combining Descriptions

- **Files**: `1-calcul.js`, `1-calcul.test.js`
- **Goal**: Extend `calculateNumber` to support operations (`SUM`, `SUBTRACT`, `DIVIDE`). Add tests for the new functionality with clear descriptions.

**Run Test**:
```bash
npm test 1-calcul.test.js
```

---

### Task 2: Basic Test Using Chai

- **Files**: `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Goal**: Rewrite the tests for `1-calcul.js` using Chai's `expect` assertion style.

**Run Test**:
```bash
npm test 2-calcul_chai.test.js
```

---

### Task 3: Spies

- **Files**: `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Goal**: Use Sinon spies to ensure `Utils.calculateNumber` is called correctly by `sendPaymentRequestToApi`.

**Run Test**:
```bash
npm test 3-payment.test.js
```

---

### Task 4: Stubs

- **Files**: `4-payment.js`, `4-payment.test.js`
- **Goal**: Use Sinon stubs to replace `Utils.calculateNumber` with a controlled return value and verify the behavior of `sendPaymentRequestToApi`.

**Run Test**:
```bash
npm test 4-payment.test.js
```

---

### Task 5: Hooks

- **Files**: `5-payment.js`, `5-payment.test.js`
- **Goal**: Use `beforeEach` and `afterEach` hooks to manage spies, ensuring consistent behavior across tests.

**Run Test**:
```bash
npm test 5-payment.test.js
```

---

### Task 6: Async Tests with Done

- **Files**: `6-payment_token.js`, `6-payment_token.test.js`
- **Goal**: Test the asynchronous `getPaymentTokenFromAPI` function using Mocha's `done` callback.

**Run Test**:
```bash
npm test 6-payment_token.test.js
```

---

### Task 7: Skipping Tests

- **Files**: `7-skip.test.js`
- **Goal**: Use Mocha's `.skip()` method to temporarily bypass failing tests without removing them.

**Run Test**:
```bash
npm test 7-skip.test.js
```

---

### Task 8: Basic Integration Testing

- **Files**: `8-api/package.json`, `8-api/api.js`, `8-api/api.test.js`
- **Goal**: Create a basic Express API with a `/` endpoint and test its integration.

**Run Test**:
```bash
npm test api.test.js
```

---

### Task 9: Regex Integration Testing

- **Files**: `9-api/api.js`, `9-api/api.test.js`
- **Goal**: Extend the Express API with a `GET /cart/:id` route. Validate `:id` as a number and write comprehensive tests.

**Run Test**:
```bash
npm test api.test.js
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/alx-backend-javascript.git
   cd alx-backend-javascript/0x06-unittests_in_js
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

- Run individual tests with:
  ```bash
  npm test <test_file_name>
  ```
- Run all tests:
  ```bash
  npm test
  ```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
