import { ErrorAlertError, InfoAlertError } from '@/utils/errors';

export const checkEmptyInput = (input: string) => {
  if (!input) {
    throw new InfoAlertError('레포지토리를 입력해주세요.');
  }
};

export const checkValideInputForGithubSearch = (
  userName: string,
  repoName: string,
  branch: string,
) => {
  if (!userName || !repoName || !branch)
    throw new ErrorAlertError('입력이 잘못되었습니다. 다시 입력해주세요.');
};
