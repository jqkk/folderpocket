import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { MarkGithubIcon } from '@primer/octicons-react';
import { useSetAtom } from 'jotai';
import React, { useState } from 'react';

import { githubSearchApi } from '../api';
import { sourceAtom } from '../atoms/source';

const SearchGithub = () => {
  const [input, setInput] = useState('');
  const setSource = useSetAtom(sourceAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const [userName, repoName, branch] = input.split('/');
      const data = await githubSearchApi.searchInGithub(
        userName,
        repoName,
        branch,
      );
      const array = data.tree.map((item) => {
        const pathArray = item.path.split('/');
        return { depth: pathArray.length - 1, name: pathArray.pop() };
      });
      const result = array.reduce((acc, cur) => {
        return acc + '\t'.repeat(cur.depth) + cur.name + '\n';
      }, '');
      setSource(result);
    }
  };

  return (
    <InputGroup>
      <InputLeftAddon backgroundColor='yellow.400' borderColor='yellow.400'>
        <MarkGithubIcon size={24} />
      </InputLeftAddon>
      <Input
        placeholder='깃허브 레포지토리를 입력해주세요.'
        borderColor='yellow.400'
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
};

export default SearchGithub;
