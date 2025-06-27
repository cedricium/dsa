import { TestCase } from "../../../core/types";

export const testCases: TestCase[] = [
  {
    description: "given example",
    input: ["aabcccccaaa"],
    expected: "a2b1c5a3",
  },
  {
    description: "mixed case",
    input: ["Aabcccccaaa"],
    expected: "A1a1b1c5a3",
  },
  {
    description: "empty string input",
    input: [""],
    expected: "",
  },
  {
    description: "single character string",
    input: ["a"],
    expected: "a",
  },
  {
    description: "compressed length equals original length",
    input: ["aa"],
    expected: "aa",
  },
  {
    description: "two different characters",
    input: ["ab"],
    expected: "ab",
  },
  {
    description: "compression creates shorter string",
    input: ["aaa"],
    expected: "a3",
  },

  // ADDITIONAL TEST CASES

  {
    description: "all unique characters",
    input: ["abcdef"],
    expected: "abcdef", // Would compress to a1b1c1d1e1f1 (length 12)
  },
  {
    description: "alternating characters",
    input: ["ababab"],
    expected: "ababab", // Would compress to a1b1a1b1a1b1 (length 12)
  },
  {
    description: "long run of single character",
    input: ["aaaaaaaaaaa"], // 11 a's
    expected: "a11",
  },
  {
    description: "string ends with a single character run",
    input: ["aaabbc"],
    expected: "aaabbc",
  },
  {
    description: "case-sensitive compression",
    input: ["aaAA"],
    expected: "aaAA", // Not a4
  },
  {
    description: "repeating sequence that does not compress",
    input: ["abcabcabc"],
    expected: "abcabcabc", // a1b1c1... → longer
  },
  {
    description: "compression result is same length as original",
    input: ["aab"],
    expected: "aab", // Would compress to a2b1 (length 4)
  },
  {
    description: "long mixed run",
    input: ["aAaAaAaAaA"],
    expected: "aAaAaAaAaA", // Compressed = 20 chars > 10
  },
  {
    description: "multi-digit run count at start",
    input: ["aaaaaaaaaab"],
    expected: "a10b1", // Compressed = 6 vs original 11
  },
  {
    description: "multi-digit run count at end",
    input: ["baaaaaaaaaa"],
    expected: "b1a10",
  },
];
