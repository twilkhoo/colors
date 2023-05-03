import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import customTheme from "../theme/index";
import { AuthProvider } from '../context/AuthProvider';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
