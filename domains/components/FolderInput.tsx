import { Box } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import Editor from 'react-simple-code-editor';

import { sourceAtom } from '../atoms/source';

const FolderInput = () => {
  const [source, setSource] = useAtom(sourceAtom);

  return (
    <Box
      backgroundColor='gray.100'
      minHeight={60}
      display='flex'
      flexDirection='column'
      p={2}>
      <Editor
        style={{ height: '100%', flex: 1 }}
        value={source}
        onValueChange={setSource}
        highlight={(code: string) => <>{code}</>}
      />
    </Box>
  );
};

export default FolderInput;
