import {
  Box,
  Flex,
} from "@chakra-ui/react";
import IndexBackground from "@/components/index/IndexBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import DecorativeBox from "@/components/index/DecorativeBox";
import Footer from "@/components/Footer";
import ChromeElem from "@/components/index/ChromeElem";
import FadingText from "@/components/index/FadingText";
import Description from "@/components/index/Description";

const Home = () => {
  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar text="enter"/>
          <Hero />
          <FadingText delay={4}>
            <Description/>
            <DecorativeBox/>
            <ChromeElem/>
          </FadingText>
        </Box>
      </Flex>
      <Footer/>
    </IndexBackground>
  );
};

export default Home;
