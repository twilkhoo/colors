import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "background.grey.100",
      },
    }),
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
  },
  config: {
    initialColorMode: "light",
  },
});

export default customTheme;
