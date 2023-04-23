import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';

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
      <Button width='100%' mt={5} colorScheme='yellow'>
        Copy
      </Button>
    </Box>
  );
};

export default Home;
