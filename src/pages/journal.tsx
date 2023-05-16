import { Box, Flex, } from "@chakra-ui/react";
import withAuth from "@/components/withAuth";
import IndexBackground from "@/components/index/IndexBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Create from "@/components/journal/Create";

const Journal = () => {
  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar text="leave"/>
          <Create/>
        </Box>
      </Flex>
      <Footer/>
    </IndexBackground>
  );
};

export default withAuth(Journal);
