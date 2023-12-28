import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import customTheme from "../theme/index";
import { AuthProvider } from "../context/AuthProvider";
import { BrightnessProvider } from "@/context/BrightnessProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BrightnessProvider>
      <AuthProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </BrightnessProvider>
  );
};

export default App;
