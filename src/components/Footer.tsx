import { Flex, Spacer, Text } from "@chakra-ui/react";
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
        <Text textStyle="footer">Made with &lt;3</Text>
      </Flex>

  );
};

export default Footer;
