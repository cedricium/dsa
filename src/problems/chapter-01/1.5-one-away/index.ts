export const problem = {
  id: "1.5",
  solution: oneAway,
};

/**
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character, or replace a character. Given two strings,
 * write a function to check if they are one edit (or zero edits) away.
 */
function oneAway(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) >= 2) return false;

  const [largerSet, smallerSet] =
    a.length >= b.length ? [new Set(a), new Set(b)] : [new Set(b), new Set(a)];

  const diff = largerSet.difference(smallerSet);
  if (diff.size >= 2) return false;

  return true;
}
