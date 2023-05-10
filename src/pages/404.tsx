import { Box, Button, Flex, Grid, GridItem, Text, useMediaQuery, useTheme } from "@chakra-ui/react";
import IndexBackground from "@/components/index/IndexBackground";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import LeftText from "@/components/index/LeftText";
import DecorativeBox from "@/components/index/DecorativeBox";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <IndexBackground>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box justifyContent="center" alignItems="center" textAlign="center">
          <Text textStyle="homeText1">404; page not found</Text>
          <Button onClick={() => router.push("/")} variant="outlined" py="25px" my="15px"><Text textStyle="buttonText1">home</Text></Button>
          <Text textStyle="homeText2">chromatic;notes</Text>
        </Box>
      </Flex>
    </IndexBackground>
  );
};

export default Home;
