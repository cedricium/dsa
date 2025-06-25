import * as fs from "fs";
import * as path from "path";

export async function findProblemDirectory(problemId: string): Promise<string> {
  const chapter = getChapterFromId(problemId);
  const chapterDir = getProjectPath(`problems/${chapter}`);

  try {
    const entries = await fs.promises.readdir(chapterDir);
    const problemDirName = entries.find((entry) =>
      entry.startsWith(`${problemId}-`)
    );

    if (problemDirName) {
      return path.join(chapterDir, problemDirName);
    }
    throw new Error(`Directory for problem ${problemId} not found.`);
  } catch (error) {
    throw new Error(
      `Could not find problem directory for ${problemId}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

export function getChapterFromId(problemId: string): string {
  const chapterNum = problemId.split(".")[0];
  return `chapter-${chapterNum.padStart(2, "0")}`;
}

export function parseProblemInput(input: string): {
  problemId: string;
  problemName: string;
} {
  const parts = input.split("-");
  if (parts.length < 2) {
    throw new Error(
      "Problem input must be in format: <id>-<name> (e.g., 1.3-urlify)"
    );
  }

  const problemId = parts[0];
  const problemName = parts.slice(1).join("-");

  return { problemId, problemName };
}

export function resolveProblemDir(
  problemId: string,
  problemName: string
): string {
  const chapter = getChapterFromId(problemId);
  return `./problems/${chapter}/${problemId}-${problemName}`;
}

export function getProjectPath(...segments: string[]): string {
  return path.resolve(__dirname, "..", ...segments);
}

export function getProblemPaths(problemDir: string): {
  problemPath: string;
  testPath: string;
} {
  return {
    problemPath: `${problemDir}/index.ts`,
    testPath: `${problemDir}/index.test.ts`,
  };
}
