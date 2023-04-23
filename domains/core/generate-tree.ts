import flattenDeep from 'lodash.flattendeep';

import type { FileStructure } from '../types/FileStructure';
import { last } from '../utils';
import { LINE_STRINGS } from './line-strings';

export const generateTree = (structure: FileStructure): string =>
  flattenDeep([
    getAsciiLine(structure),
    structure.children.map((c) => generateTree(c)),
  ])
    // Remove null entries. Should only occur for the very first node
    // when `options.rootDot === false`
    .filter((line) => line != null)
    .join('\n');

const getAsciiLine = (structure: FileStructure) => {
  if (!structure.parent) {
    return structure.name;
  }

  const chunks = [
    isLastChild(structure) ? LINE_STRINGS.LAST_CHILD : LINE_STRINGS.CHILD,
    structure.name,
  ];

  let current = structure.parent;
  while (current && current.parent) {
    chunks.unshift(
      isLastChild(current) ? LINE_STRINGS.EMPTY : LINE_STRINGS.DIRECTORY,
    );
    current = current.parent;
  }

  // Join all the chunks together to create the final line.
  // If we're not rendering the root `.`, chop off the first 4 characters.
  return chunks.join('').substring(0);
};

/**
 * A utility function do determine if a file or folder
 * is the last child of its parent
 * @param structure The file or folder to test
 */
const isLastChild = (structure: FileStructure): boolean =>
  Boolean(structure.parent && last(structure.parent.children) === structure);
