export const problem = {
  id: "1.1",
  solution: isUnique,
};

/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
function isUnique(str: string): boolean {
  return new Set(str).size === str.length;
}
