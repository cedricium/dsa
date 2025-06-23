export const problem = {
  id: "1.3",
  solution: urlify,
};

/**
 * Write a method to replace all spaces in a string with '%20'. You may assume
 * that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" length of the string.
 * Perform this operation in-place by modifying the original input.
 */
function urlify(url: string[], trueLen: number): string[] {
  if (url.length === trueLen) return url;
  let shift = url.length - trueLen;

  for (let i = trueLen - 1; i >= 0 && shift >= 0; i--) {
    if (url[i] === " ") {
      shift -= 2;
      url[i + shift] = "%";
      url[i + shift + 1] = "2";
      url[i + shift + 2] = "0";
    } else {
      url[i + shift] = url[i];
    }
  }

  return url;
}
