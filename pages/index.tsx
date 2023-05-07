import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import CopyButton from '@/domains/components/CopyButton';
import FolderInput from '@/domains/components/FolderInput';
import SearchGithub from '@/domains/components/SearchGithub';
import TreeOutput from '@/domains/components/TreeOutput';

const Home = () => {
  return (
    <Box px={7} py={10} minHeight='100vh' display='flex' flexDirection='column'>
      <Box mb={7}>
        <SearchGithub />
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
    </Box>
  );
};

export default Home;
