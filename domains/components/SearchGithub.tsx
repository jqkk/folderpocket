import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { MarkGithubIcon } from '@primer/octicons-react';
import React from 'react';

const SearchGithub = () => {
  return (
    <InputGroup>
      <InputLeftAddon backgroundColor='yellow.400' borderColor='yellow.400'>
        <MarkGithubIcon size={24} />
      </InputLeftAddon>
      <Input
        placeholder='깃허브 레포지토리를 입력해주세요.'
        borderColor='yellow.400'
      />
    </InputGroup>
  );
};

export default SearchGithub;
