import { Box, Spinner } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { loadingAtom } from '@/atoms/loading';

const Loading = () => {
  const loading = useAtomValue(loadingAtom);

  return loading ? (
    <Box
      position='absolute'
      top='0'
      bottom='0'
      width='100%'
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg='grayAlpha.100'
      backdropFilter='blur(10px) hue-rotate(90deg)'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='yellow.400'
        size='xl'
      />
    </Box>
  ) : null;
};

export default Loading;
