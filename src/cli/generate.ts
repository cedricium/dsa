import { generateProblem } from "../generators/problem-generator";

async function main() {
  const problemInput = process.argv[2];

  if (!problemInput) {
    console.log("Usage: npm run test:gen <problem-id>-<name>");
    console.log("Example: npm run test:gen 1.3-urlify");
    process.exit(1);
  }

  try {
    await generateProblem(problemInput);
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`
    );
    process.exit(1);
  }
}

main().catch(console.error);
