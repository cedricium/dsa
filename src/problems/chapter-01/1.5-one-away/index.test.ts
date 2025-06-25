import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "same strings",
    input: ["pale", "pale"],
    expected: true,
  },
  {
    description: "edit type: insert char",
    input: ["pale", "pales"],
    expected: true,
  },
  {
    description: "edit type: remove char",
    input: ["pale", "pal"],
    expected: true,
  },
  {
    description: "edit type: replace char",
    input: ["pale", "bale"],
    expected: true,
  },
  {
    description: "edit type: replace multiple chars",
    input: ["pale", "bake"],
    expected: false,
  },
  {
    description: "two empty strings",
    input: ["", ""],
    expected: true,
  },
  {
    description: "one empty string",
    input: ["", "a"],
    expected: true,
  },
  {
    description: "multiple edits",
    input: ["abc", "zbcd"],
    expected: false,
  },
];
