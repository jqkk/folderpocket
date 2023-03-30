import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <ChakraProvider>
        <DevTools />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
