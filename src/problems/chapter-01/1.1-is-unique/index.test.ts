import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "string with unique characters",
    input: ["abcdef"],
    expected: true,
  },
  {
    description: "string with duplicate characters",
    input: ["hello"],
    expected: false,
  },
];
