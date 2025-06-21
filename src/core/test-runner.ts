import { Problem, TestCase, TestResult } from "./types";

export async function runTests(
  problem: Problem,
  testCases: TestCase[]
): Promise<void> {
  console.log(`\nRunning tests for Problem ${problem.id}`);
  console.log("=".repeat(40));

  const results: TestResult[] = [];

  for (const testCase of testCases) {
    const result = await runSingleTest(problem, testCase);
    results.push(result);
    displayResult(result);
  }

  displaySummary(results);
}

async function runSingleTest(
  problem: Problem,
  testCase: TestCase
): Promise<TestResult> {
  const startTime = performance.now();

  try {
    const actual = problem.solution(...testCase.input);
    const endTime = performance.now();

    const passed = deepEqual(actual, testCase.expected);

    return {
      passed,
      executionTime: endTime - startTime,
      description: testCase.description,
    };
  } catch (error) {
    const endTime = performance.now();

    return {
      passed: false,
      executionTime: endTime - startTime,
      error: error instanceof Error ? error.message : String(error),
      description: testCase.description,
    };
  }
}

function displayResult(result: TestResult): void {
  const status = result.passed ? "✓" : "✗";
  const time = `${result.executionTime.toFixed(2)}ms`;

  console.log(`  ${status} ${result.description} (${time})`);

  if (result.error) {
    console.log(`    Error: ${result.error}`);
  }
}

function displaySummary(results: TestResult[]): void {
  const passed = results.filter((r) => r.passed).length;
  const total = results.length;
  const avgTime = results.reduce((sum, r) => sum + r.executionTime, 0) / total;

  console.log("\n" + "=".repeat(40));
  console.log(`Tests: ${passed}/${total} passed`);
  console.log(`Average execution time: ${avgTime.toFixed(2)}ms`);

  if (passed === total) {
    console.log("🎉 All tests passed!");
  } else {
    console.log(`❌ ${total - passed} test(s) failed`);
  }
  console.log();
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((val, i) => deepEqual(val, b[i]));
  }
  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => deepEqual(a[key], b[key]));
  }
  return false;
}
