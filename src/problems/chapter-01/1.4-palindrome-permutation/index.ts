export const problem = {
  id: "1.4",
  solution: palindromePermutation,
};

/**
 *
 */
function palindromePermutation(str: string): boolean {
  const charMap = new Map<string, number>();
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z]/.test(char)) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  }

  let unbalanced = 0;
  for (const value of charMap.values()) {
    if (value % 2 !== 0) {
      unbalanced++;
    }
    if (unbalanced > 1) return false;
  }

  return true;
}
