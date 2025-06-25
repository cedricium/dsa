import { runTests } from "../core/test-runner";
import { findProblemDirectory, getProblemPaths } from "../core/path-utils";

async function main() {
  const problemId = process.argv[2];

  if (!problemId) {
    console.log("Usage: npm run test <problem-id>");
    console.log("Example: npm run test 1.1");
    process.exit(1);
  }

  try {
    const { problem, testCases } = await loadProblem(problemId);
    await runTests(problem, testCases);
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exit(1);
  }
}

async function loadProblem(problemId: string) {
  try {
    const problemDir = await findProblemDirectory(problemId);
    const { problemPath, testPath } = getProblemPaths(problemDir);

    const { problem } = await import(problemPath);
    const { testCases } = await import(testPath);

    if (!problem || !testCases) {
      throw new Error(`Invalid problem or test structure for ${problemId}`);
    }

    return { problem, testCases };
  } catch (error) {
    throw new Error(
      `Could not load problem ${problemId}. Make sure the problem directory and files exist.`
    );
  }
}

main().catch(console.error);
