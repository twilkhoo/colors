import { Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";

const Footer = () => {
  const { login } = useAuth();
  const tempHandleGoogleSignIn = async () => {
    await login();
  };

  return (

      <Flex
        py="20px"
        borderTop="1px"
        borderColor="white"
        justifyContent="center"
      >
        <Text textStyle="footer">footer</Text>
      </Flex>

  );
};

export default Footer;
