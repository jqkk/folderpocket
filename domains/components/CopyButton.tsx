import { Button } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { treeAtom } from '../atoms/tree';

const CopyButton = () => {
  const [buttonText, setButtonText] = useState('Copy');
  const tree = useAtomValue(treeAtom);

  const handleCopyText = () => {
    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Copy');
    }, 2000);
  };

  return (
    <CopyToClipboard text={tree} onCopy={handleCopyText}>
      <Button width='100%' mt={5} colorScheme='yellow'>
        {buttonText}
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
