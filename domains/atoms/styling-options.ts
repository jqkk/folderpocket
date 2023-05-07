import { atom } from 'jotai';

export const iconOptionAtom = atom(0);

export const fullPathOptionAtom = atom(0);

export const rootOptionAtom = atom(0);

export const stylingOptionsAtom = atom((get) => {
  return {
    iconOption: Boolean(get(iconOptionAtom)),
    fullPathOption: Boolean(get(fullPathOptionAtom)),
    rootOption: Boolean(get(rootOptionAtom)),
  };
});
