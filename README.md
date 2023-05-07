## 개요

[tree-online](https://gitlab.com/nfriend/tree-online)에 영감을 얻어 나만의 폴더 구조 생성기를 만듭니다.

## 요구 사항

- 폴더 트리 depth를 `Tab`으로 구분해서 입력하면 폴더 구조로 변환되어 출력된다.
- `유저명/레포지토리 이름/브랜치`을 입력으로 깃허브 레포지토리의 폴더 구조를 생성해낼 수 있다.
- 커스텀 스타일링을 할 수 있다.

## 실행 방법

- node js가 설치가 선행되어야 합니다.(v16.16.0)

- 만약 pnpm이 설치되어 있지 않은 경우, 아래의 명령어로 pnpm을 설치합니다.

```shell
npm i -g pnpm
```

- 아래 명령어로 실행시킬 수 있습니다.

```shell
pnpm i && pnpm dev
```

## 기술 스택

```text
- typescript
- react js
- next js
- jotai
- chakra-ui
```

## 폴더 구조

```text
.
├── 📃 .cz-config.js
├── 📃 .eslintignore
├── 📃 .eslintrc.js
├── 📦 .github
│   ├── 📃 ISSUE_TEMPLATE.md
│   └── 📃 PULL_REQUEST_TEMPLATE.md
├── 📃 .gitignore
├── 📦 .husky
│   └── 📃 pre-commit
├── 📃 .prettierrc
├── 📃 README.md
├── 📦 atoms
│   ├── 📃 loading.ts
│   └── 📃 store.ts
├── 📦 components
│   ├── 📃 Loading.tsx
│   └── 📃 index.ts
├── 📦 domains
│   ├── 📦 api
│   │   ├── 📃 github-search.ts
│   │   └── 📃 index.ts
│   ├── 📦 atoms
│   │   ├── 📃 source.ts
│   │   ├── 📃 styling-options.ts
│   │   └── 📃 tree.ts
│   ├── 📦 components
│   │   ├── 📃 ClearButton.tsx
│   │   ├── 📃 CopyButton.tsx
│   │   ├── 📃 FolderInput.tsx
│   │   ├── 📃 SearchGithub.tsx
│   │   ├── 📃 StylingOptions.tsx
│   │   └── 📃 TreeOutput.tsx
│   ├── 📦 core
│   │   ├── 📃 generate-tree.ts
│   │   ├── 📃 index.ts
│   │   ├── 📃 line-strings.ts
│   │   └── 📃 parse-input.ts
│   ├── 📦 hooks
│   │   ├── 📃 useGithubSearch.ts
│   │   ├── 📃 useSearch.ts
│   │   └── 📃 useStylingOptions.ts
│   ├── 📦 types
│   │   ├── 📃 FileStructure.ts
│   │   └── 📃 StylingOptions.ts
│   └── 📦 utils
│       ├── 📃 index.ts
│       ├── 📃 input-validate.ts
│       └── 📃 last.ts
├── 📃 next.config.js
├── 📃 package.json
├── 📦 pages
│   ├── 📃 _app.tsx
│   ├── 📃 _document.tsx
│   ├── 📦 api
│   │   └── 📃 hello.ts
│   └── 📃 index.tsx
├── 📃 pnpm-lock.yaml
├── 📦 public
│   ├── 📃 favicon.ico
│   ├── 📃 next.svg
│   ├── 📃 thirteen.svg
│   └── 📃 vercel.svg
├── 📦 styles
│   └── 📃 global.scss
├── 📃 tsconfig.json
└── 📦 utils
    └── 📦 errors
        ├── 📃 CustomError.ts
        ├── 📃 ErrorAlertError.ts
        ├── 📃 InfoAlertError.ts
        ├── 📃 WarningAlertError.ts
        └── 📃 index.ts
```

## 참고 자료

- https://gitlab.com/nfriend/tree-online
