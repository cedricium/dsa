export const problem = {
  id: "1.2",
  solution: checkPermutation,
};

/**
 * Given two strings, write a method to decide
 * if one is a permutation of the other.
 */
function checkPermutation(a: string, b: string): boolean {
  if (a === b) return false;
  if (a.length !== b.length) return false;

  const charMap = new Map<string, number>();
  for (const char of a) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of b) {
    const value = charMap.get(char);
    if (!value) return false;
    charMap.set(char, value - 1);
  }

  return true;
}
