import {
  Box,
  Flex,
  Grid,
  GridItem,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import IndexBackground from "@/components/index/IndexBackground";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import LeftText from "@/components/index/LeftText";
import DecorativeBox from "@/components/index/DecorativeBox";
import ModalLeftText from "@/components/index/ModalLeftText";
import ModalDecorativeBox from "@/components/index/ModalDecorativeBox";
import Footer from "@/components/Footer";
import ChromeElem from "@/components/index/ChromeElem";

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar />
          <LeftText seconds={seconds} />
          <DecorativeBox />
          <Grid templateColumns={{ base: "1fr", xl: "60% 40%" }} gap="20px" my="100px">
            <GridItem>
              <ModalLeftText />
            </GridItem>
            <GridItem>
              <ModalDecorativeBox />
            </GridItem>
          </Grid>
          <ChromeElem/>
        </Box>
      </Flex>
      <Footer/>
    </IndexBackground>
  );
};

export default Home;
