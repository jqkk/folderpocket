import { atom } from 'jotai';

import { generateTree, parseInput } from '../core';
import { sourceAtom } from './source';
import { stylingOptionsAtom } from './styling-options';

export const treeAtom = atom((get) => {
  const input = get(sourceAtom);
  const stylingOptions = get(stylingOptionsAtom);
  return generateTree(parseInput(input), stylingOptions);
});
