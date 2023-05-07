import type { FileStructure } from '../types/FileStructure';
import { last } from '../utils';

const leadingWhitespaceAndBulletRegex = /^((\s*)(?:-\s)?)/;

const onlyWhitespaceRegex = /^\s*$/;

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
  let lines: string[] = input.match(newlineSplitterRegex) || [];

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
