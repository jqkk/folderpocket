import { useToast } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { loadingAtom } from '@/atoms/loading';
import { CustomError } from '@/utils/errors';

import {
  checkEmptyInput,
  checkValidateInputForGithubSearch,
} from '../utils/input-validate';
import useGithubSearch from './useGithubSearch';

const useSearch = () => {
  const [input, setInput] = useState('');
  const { searchGithub } = useGithubSearch();
  const setLoading = useSetAtom(loadingAtom);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      checkEmptyInput(input);

      const [userName, repoName, branch] = input.split('/');
      checkValidateInputForGithubSearch(userName, repoName, branch);

      setLoading(true);
      await searchGithub(userName, repoName, branch);
      setLoading(false);
    } catch (e) {
      handleError(e);
    }
  };

  const handleError = (e: unknown) => {
    setLoading(false);
    if (e instanceof CustomError) {
      const { title, status } = e.getOptions();
      toast({
        title,
        description: e.message,
        status,
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      toast({
        title: 'Error',
        description: '에러가 발생하였습니다. 다시 시도해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return {
    input,
    handleChange,
    handleKeyDown,
    handleSubmit,
  };
};

export default useSearch;
