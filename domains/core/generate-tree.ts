import flattenDeep from 'lodash.flattendeep';

import type { FileStructure } from '../types/FileStructure';
import type { StylingOptions } from '../types/StylingOptions';
import { last } from '../utils';
import { LINE_STRINGS } from './line-strings';

export const generateTree = (
  structure: FileStructure,
  options: StylingOptions,
): string =>
  flattenDeep([
    getAsciiLine(structure, options) ?? [],
    structure.children.map((c) => generateTree(c, options)),
  ])
    .filter((line) => line != null)
    .join('\n');

const getAsciiLine = (structure: FileStructure, options: StylingOptions) => {
  if (!structure.parent) {
    return options.rootOption ? structure.name : null;
  }

  const chunks = [
    isLastChild(structure) ? LINE_STRINGS.LAST_CHILD : LINE_STRINGS.CHILD,
    options.iconOption
      ? structure.children.length > 0
        ? '📦 ' + structure.name
        : '📃 ' + structure.name
      : structure.name,
  ];

  let current = structure.parent;
  while (current && current.parent) {
    chunks.unshift(
      isLastChild(current) ? LINE_STRINGS.EMPTY : LINE_STRINGS.DIRECTORY,
    );
    current = current.parent;
  }

  return chunks
    .join('')
    .substring(options.rootOption ? 0 : LINE_STRINGS.CHILD.length);
};

const isLastChild = (structure: FileStructure): boolean =>
  Boolean(structure.parent && last(structure.parent.children) === structure);
