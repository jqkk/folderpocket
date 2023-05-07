import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useMediaQuery,
} from '@chakra-ui/react';
import { MarkGithubIcon } from '@primer/octicons-react';

import useSearch from '../hooks/useSearch';

const SearchGithub = () => {
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
  const { input, handleChange, handleKeyDown, handleSubmit } = useSearch();

  return (
    <Box display='flex' gap='1'>
      <InputGroup>
        <InputLeftAddon backgroundColor='yellow.400' borderColor='yellow.400'>
          <MarkGithubIcon size={24} />
        </InputLeftAddon>
        <Input
          placeholder={
            isSmallerThan480
              ? '이름/레포지토리/브랜치'
              : '깃허브 레포지토리를 입력해주세요.(ex. 이름/레포지토리/브랜치)'
          }
          borderColor='yellow.400'
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      <Button colorScheme='yellow' onClick={handleSubmit}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchGithub;
