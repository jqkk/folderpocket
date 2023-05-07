import { Button } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import React from 'react';

import { clearSourceAtom } from '../atoms/source';

const ClearButton = () => {
  const clearSource = useSetAtom(clearSourceAtom);

  return (
    <Button
      width='100%'
      mt={3}
      colorScheme='gray'
      onClick={() => clearSource()}>
      Clear
    </Button>
  );
};

export default ClearButton;
