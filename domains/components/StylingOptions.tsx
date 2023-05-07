import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';

import useStyingOptions from '../hooks/useStylingOptions';

const StylingOptions = () => {
  const {
    iconOption,
    rootOption,
    handleChangeIconOption,
    handleChangeRootOption,
  } = useStyingOptions();

  return (
    <FormControl as={Flex} gap={8}>
      <Box display='flex' alignItems='center'>
        <FormLabel
          htmlFor='icon'
          marginBottom={0}
          fontSize={['sm', 'md']}
          marginEnd={[1, 3]}>
          Icons
        </FormLabel>
        <Switch
          id='icon'
          value={iconOption}
          onChange={handleChangeIconOption}
        />
      </Box>
      <Box display='flex' alignItems='center'>
        <FormLabel
          htmlFor='root'
          marginBottom={0}
          fontSize={['sm', 'md']}
          marginEnd={[1, 3]}>
          Root .
        </FormLabel>
        <Switch
          id='root'
          value={rootOption}
          onChange={handleChangeRootOption}
        />
      </Box>
      {/* <Box display='flex' alignItems='center'>
        <FormLabel
          htmlFor='fullPath'
          marginBottom={0}
          fontSize={['sm', 'md']}
          marginEnd={[1, 3]}>
          Full path
        </FormLabel>
        <Switch
          id='fullPath'
          value={fullPathOption}
          onChange={handleChangeFullPathOption}
        />
      </Box> */}
    </FormControl>
  );
};

export default StylingOptions;
