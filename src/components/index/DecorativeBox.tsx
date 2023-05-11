import { Box, keyframes, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";



const colorAnimation = (theme: any) =>
  keyframes`
    0% { 
      background: ${theme.colors.moods["100"]}; 
    } 
    16.6% { 
      background: ${theme.colors.moods["200"]}; 
    } 
    33.3% { 
      background: ${theme.colors.moods["300"]}; 
    } 
    50% { 
      background: ${theme.colors.moods["400"]}; 
    } 
    66.6% { 
      background: ${theme.colors.moods["500"]}; 
    } 
    83.3% { 
      background: ${theme.colors.moods["600"]}; 
    } 
    100% { 
      background: ${theme.colors.moods["100"]}; 
    } 
  `;



const DecorativeBox = () => {

  const theme = useTheme();

  return (
    <Box borderColor="black" borderWidth={5} height="100%">

      <Box
        position="absolute"
        width="300px"
        height="300px"
        borderColor="white"
        borderRadius="40px"
        borderWidth="5px"
        animation={`${colorAnimation(theme)} 20s ease-in-out infinite`}
      />

      {/* <Box
        position="absolute"
        width="100px"
        height="100px"
        backgroundColor="green.500"
        zIndex={1}
        animation={`${animation} 5s ease-in-out infinite`}
      /> */}


    </Box>
  );
};

export default DecorativeBox;
