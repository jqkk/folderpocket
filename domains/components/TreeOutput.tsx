import { Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { treeAtom } from '../atoms/tree';

const TreeOutput = () => {
  const tree = useAtomValue(treeAtom);

  return (
    <Box
      borderColor='gray.100'
      borderWidth='1px'
      minHeight={60}
      flex={1}
      p={2}
      whiteSpace='pre'
      fontFamily='mono'
      overflowX='auto'>
      {tree}
    </Box>
  );
};

export default TreeOutput;
