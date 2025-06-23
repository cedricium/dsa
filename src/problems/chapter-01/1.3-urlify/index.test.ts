import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "given example",
    input: [Array.from("Mr John Smith    "), 13],
    expected: Array.from("Mr%20John%20Smith"),
  },
  {
    description: "own example",
    input: [Array.from("AB CD EF G      "), 10],
    expected: Array.from("AB%20CD%20EF%20G"),
  },
  {
    description: "no spaces",
    input: [Array.from("MrJohnSmith"), 11],
    expected: Array.from("MrJohnSmith"),
  },
  {
    description: "empty string",
    input: [Array.from(""), 0],
    expected: Array.from(""),
  },
  {
    description: "just single space",
    input: [Array.from("   "), 1],
    expected: Array.from("%20"),
  },
  {
    description: "just multiple spaces",
    input: [Array.from("      "), 2],
    expected: Array.from("%20%20"),
  },
];
