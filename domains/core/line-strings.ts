const LINE_STRINGS = {
  CHILD: '├── ',
  LAST_CHILD: '└── ',
  DIRECTORY: '│   ',
  EMPTY: '    ',
};

const LINE_STRINGS_WITH_ICONS = {
  CHILD: '├── 📦 ',
  LAST_CHILD: '└── 📃 ',
  DIRECTORY: '│   ',
  EMPTY: '    ',
};

export const getLineStrings = (iconOption: boolean) => {
  return iconOption ? LINE_STRINGS_WITH_ICONS : LINE_STRINGS;
};
