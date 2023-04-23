import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import CopyButton from '@/domains/components/CopyButton';
import FolderInput from '@/domains/components/FolderInput';
import SearchGithub from '@/domains/components/SearchGithub';
import TreeOutput from '@/domains/components/TreeOutput';

const Home = () => {
  return (
    <Box px={7} py={10}>
      <Box mb={7}>
        <SearchGithub />
      </Box>
      <FolderInput />
      <Box display='flex' justifyContent='center' my={2}>
        <TriangleDownIcon boxSize={6} color='yellow.400' />
      </Box>
      <TreeOutput />
      <CopyButton />
    </Box>
  );
};

export default Home;
