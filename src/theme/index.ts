import { extendTheme } from "@chakra-ui/react";
import { Sen } from "next/font/google"

const sen = Sen({ subsets: ["latin"], weight: "400" });

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
  colors: {
    background: {
      50: "#0184ff",
      100: "#38adf5",
    },
    text: {

    },
  },
  textStyles: {
    navbar: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "140%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },
    homeText1: {
      fontWeight: 400,
      fontSize: ["24px", null, "24px", "36px", "44px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    homeText2: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    homeText3: {
      fontWeight: 400,
      fontSize: ["20px", null, "24px", "30px", "36px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },


    buttonText1: {
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },
  },

  components: {
    Button: {
      variants: {
        outlined: {
          bg: "transparent",
          color: "white",
          border: "1px",
          _hover: { bg: "rgba(0,0,0,0.1)" },
          _active: { bg: "rgba(0,0,0,0.2)" },
        },
        text: {
          bg: "transparent",
          color: "white",
        },
      },
    },
  },
});

export default customTheme;
