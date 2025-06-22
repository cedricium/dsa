import * as path from "path";
import { parseProblemInput, resolveProblemDir } from "../core/path-utils";
import {
  ensureDirectoryExists,
  fileExists,
  writeFile,
  resolveFromSrc,
} from "../core/file-utils";
import { generateProblemTemplate, generateTestTemplate } from "./templates";

export async function generateProblem(input: string): Promise<void> {
  const { problemId, problemName } = parseProblemInput(input);
  const problemDir = resolveProblemDir(problemId, problemName);
  const fullProblemDir = resolveFromSrc(problemDir);

  if (await fileExists(fullProblemDir)) {
    throw new Error(`Problem directory already exists: ${problemDir}`);
  }

  console.log(`Creating problem ${problemId}: ${problemName}`);

  await ensureDirectoryExists(fullProblemDir);

  const problemContent = generateProblemTemplate(problemId);
  const testContent = generateTestTemplate();

  const indexPath = path.join(fullProblemDir, "index.ts");
  const testPath = path.join(fullProblemDir, "index.test.ts");

  await writeFile(indexPath, problemContent);
  await writeFile(testPath, testContent);

  console.log(`✓ Created ${problemDir}/index.ts`);
  console.log(`✓ Created ${problemDir}/index.test.ts`);
  console.log(`\nRun: npm run test ${problemId}`);
}
