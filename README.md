# DSA

A TypeScript-based test runner and solution repository for "Cracking the Coding
Interview" problems. This application provides a CLI-driven environment for
practicing data structures and algorithms with automated testing and problem
generation capabilities.

## Features

- **Problem Solutions**: TypeScript implementations of CTCI problems organized
  by chapter
- **Test Runner**: Execute test suites for individual problems with detailed
  feedback
- **Problem Generator**: Automatically scaffold new problem templates with
  boilerplate code
- **Modular Architecture**: Clean separation of CLI tools, core utilities, and
  problem solutions

## Installation

```bash
npm install
```

## Usage

### Generating Problems

Scaffold new problem templates with boilerplate code:

```bash
npm run test:gen <id-name> # 1.3-urlify
```

### Running Tests

Execute test suites for specific problems:

```bash
npm run test <id> # 1.2
```

Example output:

```bash
Running tests for Problem 1.2
========================================
  ✓ reversed strings (0.03ms)
  ✓ longer strings (0.01ms)
  ✓ same strings (0.00ms)
  ✓ whitespace sensitive (0.00ms)
  ✓ case sensitive (0.01ms)
  ✓ string length mismaatch (0.00ms)

========================================
Tests: 6/6 passed
Average execution time: 0.01ms
🎉 All tests passed!
```

## License

[MIT](./LICENSE)
