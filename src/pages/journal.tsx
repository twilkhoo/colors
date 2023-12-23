import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import withAuth from "@/components/withAuth";
import IndexBackground from "@/components/background/IndexBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Create from "@/components/journal/Create";
import View from "@/components/journal/View";

const Journal = () => {
  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar text="leave" />
          <Box px={[10, null, 25, 50, 100, 100]}>
            <Create />
            <View />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </IndexBackground>
  );
};

export default withAuth(Journal);
