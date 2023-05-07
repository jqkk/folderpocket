import { useSetAtom } from 'jotai';

import { githubSearchApi } from '../api';
import { sourceAtom } from '../atoms/source';

const useGithubSearch = () => {
  const setSource = useSetAtom(sourceAtom);

  const searchGithub = async (
    userName: string,
    repoName: string,
    branch: string,
  ) => {
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
  };

  return {
    searchGithub,
  };
};

export default useGithubSearch;
