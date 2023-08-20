import { Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";

type NavbarProps = {
  text: string;
}

const Navbar = ({text} : NavbarProps)  => {
  const { login, logout } = useAuth();
  
  const handleGoogleSignIn = async () => {
    await login();
  };

  const handleGoogleSignOut = async () => {
    await logout();
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
        h="100px"
        align="center"
      >
        <Text textStyle="navbar">chromatic;notes</Text>
        <Spacer />
        <Text textStyle="navbar" _hover={{ cursor: "pointer" }} onClick={text === "enter" ? handleGoogleSignIn : handleGoogleSignOut}>{text}</Text>
      </Flex>
    </motion.div>

  );
};

export default Navbar;
