import { atom } from 'jotai';

import { generateTree, parseInput } from '../core';
import { sourceAtom } from './source';

export const treeAtom = atom((get) => {
  const input = get(sourceAtom);
  return generateTree(parseInput(input));
});
