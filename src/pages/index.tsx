import { Box, Flex } from "@chakra-ui/react";
import IndexBackground from "@/components/background/IndexBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";

const Home = () => {
  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar text="enter" />
          <Hero />
        </Box>
      </Flex>
    </IndexBackground>
  );
};

export default Home;
