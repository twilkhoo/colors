import { Box, Flex, Text } from "@chakra-ui/react";
import IndexBackground from "@/components/index/IndexBackground";

const Loading = () => {
  return (
    <IndexBackground>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box justifyContent="center" alignItems="center" textAlign="center">
          <Text textStyle="homeText2">loading...</Text>
        </Box>
      </Flex>
    </IndexBackground>
  );
};

export default Loading;
