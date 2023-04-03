import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import FolderInput from '@/domains/components/FolderInput';

const Home = () => {
  return (
    <Box px={7} py={10}>
      <FolderInput />
      <Box display='flex' justifyContent='center' my={2}>
        <TriangleDownIcon boxSize={6} color='yellow.400' />
      </Box>
    </Box>
  );
};

export default Home;
