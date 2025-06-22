import * as path from "path";

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
  const problemName = parts.slice(1).join("-"); // Handle names with multiple dashes

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
    problemPath: getProjectPath(`${problemDir}/index.ts`),
    testPath: getProjectPath(`${problemDir}/index.test.ts`),
  };
}
