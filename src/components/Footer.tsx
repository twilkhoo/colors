import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex py="20px" borderTop="1px" borderColor="white" justifyContent="center">
      <Text textStyle="footer">Made with &lt;3</Text>
    </Flex>
  );
};

export default Footer;
