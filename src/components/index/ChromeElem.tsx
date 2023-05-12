import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChromeElem = () => {
  return (
    <Flex alignItems="center" justifyContent="center" my="200px">
      <Text textStyle="homeText1">get the chrome extension!</Text>
      <motion.img
        src="/chrome.svg"
        style={{ width: "100px", height: "100px" }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
      />
    </Flex>
  );
};
export default ChromeElem;
