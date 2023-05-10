import { Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { login } = useAuth();
  const tempHandleGoogleSignIn = async () => {
    await login();
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "tween",
        duration: 1.5, 
        ease: [0, 0.30, 0.10, 1], 
      }}
    >
      <Flex
        px={[25, null, 50, 75, 100, 150 ]}
        py="50px"
      >
        <Text textStyle="navbar">chromatic;notes</Text>
        <Spacer />
        <Text textStyle="navbar" _hover={{ cursor: "pointer" }} onClick={tempHandleGoogleSignIn} >enter</Text>
      </Flex>
    </motion.div>

  );
};

export default Navbar;
