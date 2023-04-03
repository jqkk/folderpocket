import type { FileStructure } from '../types/FileStructure';
import { last } from './last';

/**
 * Matches the whitespace in front of a file name.
 * Also will match a markdown bullet point if included.
 * For example, testing against "  - hello" will return
 * a positive match with the first capturing group
 * with "  - " and a second with "  "
 */
const leadingWhitespaceAndBulletRegex = /^((\s*)(?:-\s)?)/;

/** Matches lines that only contain whitespace */
const onlyWhitespaceRegex = /^\s*$/;

/** Used to split a block of text into individual lines */
const newlineSplitterRegex = /[^\r\n]+/g;

export const parseInput = (input: string): FileStructure => {
  const structures = splitInput(input);

  const root: FileStructure = {
    name: '.',
    children: [],
    indentCount: -1,
    parent: null,
  };

  const path = [root];
  for (const s of structures) {
    while (last(path).indentCount >= s.indentCount) {
      path.pop();
    }

    const parent = last(path);
    parent.children.push(s);
    s.parent = parent;

    path.push(s);
  }

  return root;
};

export const splitInput = (input: string): FileStructure[] => {
  let lines = input.match(newlineSplitterRegex) || [];

  lines = lines.filter((l) => !onlyWhitespaceRegex.test(l));

  return lines.map((l) => {
    const matchResult = leadingWhitespaceAndBulletRegex.exec(l);

    if (!matchResult) {
      throw new Error(
        `Unable to execute leadingWhitespaceAndBulletRegex against string: "${l}"`,
      );
    }

    const name = l.replace(matchResult[1], '');
    const indentCount = matchResult[2].length;

    return {
      name,
      children: [],
      indentCount,
      parent: null,
    };
  });
};
