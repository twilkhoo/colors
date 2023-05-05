import { extendTheme } from "@chakra-ui/react";
import { Alex_Brush, Dancing_Script, Fredericka_the_Great, Inter, Merienda, Poiret_One, Sen, Stalemate } from "next/font/google"

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const fred = Fredericka_the_Great({ subsets: ["latin"], weight: "400" });
const stalemate = Stalemate({ subsets: ["latin"], weight: "400" });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });
const merienda = Merienda({ subsets: ["latin"], weight: "400" });
const sen = Sen({ subsets: ["latin"], weight: "400" });

const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "white",
      },
      "::selection": {
        background: "white",
        color: "background.50"
      },
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        width: "8px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "white",
        borderRadius: "8px",
      },
    }),
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1280px",

  },
  config: {
    initialColorMode: "light",
  },
  colors: {
    background: {
      50: "#0184ff",
      100: "#bf40ff",
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
      },
    },
  },
});

export default customTheme;
