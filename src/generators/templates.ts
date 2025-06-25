export function generateProblemTemplate(problemId: string): string {
  return `export const problem = {
  id: "${problemId}",
  solution: fn,
};

/**
 * 
 */
function fn() {}
`;
}

export function generateTestTemplate(): string {
  return `import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "",
    input: [],
    expected: true,
  },
];
`;
}
