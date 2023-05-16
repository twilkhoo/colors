import { extendTheme } from "@chakra-ui/react";
import { Inter, Sen } from "next/font/google"

const sen = Sen({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

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
      100: "#38adf5",
    },
    moods: {
      100: "#525FA9",
      200: "#75B1AA",
      300: "#D1D298",
      400: "#FEE28F",
      500: "#F99153",
      600: "#E2514A",
    },
    selection: {
      100: "#42f572",
    }
  },
  textStyles: {
    navbar: {
      fontWeight: 400,
      fontSize: ["20px", null, "20px", "24px" ],
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
      fontSize: ["16px", null, "16px", "20px"],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    homeText3: {
      fontWeight: 400,
      fontSize: ["20px", null, "20px", "24px", "30px", "32px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },


    buttonText1: {
      fontWeight: 400,
      fontSize:  ["20px", null, "20px", "20px", "24px", "24px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    buttonText2: {
      fontWeight: 400,
      fontSize: ["20px", null, "20px", "20px", "24px", "24px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    noteText: {
      fontWeight: 400,
      fontSize: ["8px", null, "8px", "12px", "16px", "16px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    colorModal: {
      fontWeight: 400,
      fontSize: ["16px", null, "20px", "24px", "28px", "32px" ],
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    modalSub: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    },

    footer: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "160%",
      fontFamily: sen.style.fontFamily,
      color: "white",
    }
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
