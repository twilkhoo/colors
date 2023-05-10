import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import customTheme from "../theme/index";
import { AuthProvider } from '../context/AuthProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
