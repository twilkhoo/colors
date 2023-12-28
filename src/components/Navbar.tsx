import {
  Flex,
  Spacer,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import { MdOutlineWbSunny } from "react-icons/md"; // Import your desired icon
import { useBrightness } from "../context/BrightnessProvider";

type NavbarProps = {
  text: string;
};

const Navbar = ({ text }: NavbarProps) => {
  const { login, logout } = useAuth();

  const handleGoogleSignIn = async () => {
    await login();
  };

  const handleGoogleSignOut = async () => {
    await logout();
  };

  const { brightness, changeBrightness } = useBrightness();

  const handleBrightnessChange = (value: number) => {
    changeBrightness(value);
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1.5,
        ease: [0, 0.3, 0.1, 1],
      }}
    >
      <Flex h="100px" align="center">
        <Text textStyle="navbar">chromatic;notes</Text>
        <Spacer />
        <Flex w="100px" mr="40px" justifyContent="center" alignItems="center">
          <Slider
            aria-label="theme-slider"
            value={brightness}
            onChange={handleBrightnessChange}
          >
            <SliderTrack bg="#ffffff55">
              <SliderFilledTrack bg="white" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="#555" as={MdOutlineWbSunny} />
            </SliderThumb>
          </Slider>
        </Flex>

        <Text
          textStyle="navbar"
          _hover={{ cursor: "pointer" }}
          onClick={text === "enter" ? handleGoogleSignIn : handleGoogleSignOut}
        >
          {text}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
