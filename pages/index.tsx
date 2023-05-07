import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import ClearButton from '@/domains/components/ClearButton';
import CopyButton from '@/domains/components/CopyButton';
import FolderInput from '@/domains/components/FolderInput';
import SearchGithub from '@/domains/components/SearchGithub';
import StylingOptions from '@/domains/components/StylingOptions';
import TreeOutput from '@/domains/components/TreeOutput';

const Home = () => {
  return (
    <Box px={7} py={10} minHeight='100vh' display='flex' flexDirection='column'>
      <SearchGithub />
      <Box marginY={4}>
        <StylingOptions />
      </Box>
      <Box flex={1} display='flex' flexDirection={['column', 'column', 'row']}>
        <FolderInput />
        <Box display='flex' justifyContent='center' alignItems='center' my={2}>
          <TriangleDownIcon
            boxSize={6}
            color='yellow.400'
            transform={['none', 'none', 'rotate(270deg)']}
          />
        </Box>
        <TreeOutput />
      </Box>
      <CopyButton />
      <ClearButton />
    </Box>
  );
};

export default Home;
