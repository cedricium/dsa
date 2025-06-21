import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "reversed strings",
    input: ["ab", "ba"],
    expected: true,
  },
  {
    description: "longer strings",
    input: ["hello world", "world hello"],
    expected: true,
  },
  {
    description: "same strings",
    input: ["a", "a"],
    expected: false,
  },
  {
    description: "whitespace sensitive",
    input: [" ab", "ba"],
    expected: false,
  },
  {
    description: "case sensitive",
    input: ["Ab", "Ba"],
    expected: false,
  },
  {
    description: "string length mismaatch",
    input: ["baa", "ba"],
    expected: false,
  },
];
