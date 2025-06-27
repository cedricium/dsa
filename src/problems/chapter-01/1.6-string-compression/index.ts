export const problem = {
  id: "1.6",
  solution: stringCompression,
};

/**
 * Implement a method to perform basic string compression using the counts of
 * repeated characters. For example, the string `aabcccccaaa` would become
 * `a2b1c5a3`. If the "compressed" string would not become smaller than the
 * original string, your method should return the original string. You can
 * assume the string has only uppercase and lowercase letters (a-z).
 */
function stringCompression(str: string): string {
  if (str.length < 3) return str;

  let compressed: string = "";
  let [pointerL, pointerR] = [0, 1];

  while (pointerR <= str.length) {
    if ((str[pointerR] || "") !== str[pointerL]) {
      const diff = pointerR - pointerL;
      compressed += `${str[pointerL]}${diff}`;
      pointerL = pointerR;
    }
    pointerR++;

    if (compressed.length >= str.length) return str;
  }

  return compressed.length < str.length ? compressed : str;
}
