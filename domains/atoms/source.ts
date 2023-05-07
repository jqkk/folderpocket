import { atom } from 'jotai';

export const sourceAtom = atom('');

export const clearSourceAtom = atom(null, (get, set) => {
  set(sourceAtom, '');
});
