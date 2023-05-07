import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';

import {
  fullPathOptionAtom,
  iconOptionAtom,
  rootOptionAtom,
} from '../atoms/styling-options';

const useStyingOptions = () => {
  const [iconOption, setIconOption] = useAtom(iconOptionAtom);
  const [fullPathOption, setFullPathOption] = useAtom(fullPathOptionAtom);
  const [rootOption, setRootOption] = useAtom(rootOptionAtom);

  const handleChangeIconOption = (e: ChangeEvent<HTMLInputElement>) => {
    setIconOption(Number(e.currentTarget.checked));
  };

  const handleChangeFullPathOption = (e: ChangeEvent<HTMLInputElement>) => {
    setFullPathOption(Number(e.currentTarget.checked));
  };

  const handleChangeRootOption = (e: ChangeEvent<HTMLInputElement>) => {
    setRootOption(Number(e.currentTarget.checked));
  };

  return {
    iconOption,
    fullPathOption,
    rootOption,
    handleChangeIconOption,
    handleChangeFullPathOption,
    handleChangeRootOption,
  };
};

export default useStyingOptions;
