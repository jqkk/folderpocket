export default {
  searchInGithub: async (
    userName: string,
    repoName: string,
    branch: string,
  ) => {
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/git/trees/${branch}?recursive=1`,
    );
    const data: { tree: Array<{ path: string }> } = await response.json();
    return data;
  },
} as const;
