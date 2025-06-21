import * as path from "path";
import { runTests } from "./core/test-runner";

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
  const chapter = getChapterFromId(problemId);
  const problemDir = `./problems/${chapter}/${problemId}-${getProblemName(
    problemId
  )}`;

  try {
    const problemPath = path.resolve(__dirname, `${problemDir}/index.ts`);
    const testPath = path.resolve(__dirname, `${problemDir}/index.test.ts`);

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

function getChapterFromId(problemId: string): string {
  const chapterNum = problemId.split(".")[0];
  return `chapter-${chapterNum.padStart(2, "0")}`;
}

function getProblemName(problemId: string): string {
  // This is a simple mapping - you'd expand this as you add problems
  const nameMap: Record<string, string> = {
    "1.1": "is-unique",
    "1.2": "check-permutation",
  };

  return nameMap[problemId] || "unknown";
}

main().catch(console.error);
