import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "given example",
    input: ["Tact coa"],
    expected: true,
  },
  {
    description: "mixed case with non-letters",
    input: ["*Aa cB_ bC?"],
    expected: true,
  },
  {
    description: "multiple odd counts",
    input: ["abcedcba"],
    expected: false,
  },
  {
    description: "sheep noise",
    input: ["baa"],
    expected: true,
  },
  {
    description: "sneeze",
    input: ["achoo"],
    expected: false,
  },
];
