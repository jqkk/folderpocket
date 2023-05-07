import '@/styles/global.scss';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import type { AppProps } from 'next/app';

import { getStore } from '@/atoms/store';
import { Loading } from '@/components';

const App = ({ Component, pageProps }: AppProps) => {
  const store = getStore();
  return (
    <Provider store={store}>
      <ChakraProvider>
        {process.env.NODE_ENV === 'development' && <DevTools />}
        <Component {...pageProps} />
        <Loading />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
