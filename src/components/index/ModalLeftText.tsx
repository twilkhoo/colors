import { Box, Button, Text } from "@chakra-ui/react";
import FadingText from "./FadingText";
import useAuth from "@/hooks/useAuth";

const ModalLeftText = () => {
  const { login } = useAuth();
  const tempHandleGoogleSignIn = async () => {
    await login();
  };
  return (
    <>
      <FadingText delay={1} seconds={2}>
        <Text textStyle="homeText3" id="secondPart">
          chromatic;notes is an emotion tracker.
        </Text>
      </FadingText>

      <FadingText delay={3} seconds={2}>
        <Text textStyle="homeText3">
          everyday, pick a color representing how you feel.
        </Text>
      </FadingText>

      <FadingText delay={5} seconds={2}>
        <Text textStyle="homeText3">you can add a note if needed.</Text>
      </FadingText>

      <FadingText delay={7} seconds={2}>
        <Text textStyle="homeText3">
          then, you can view how you've been feeling lately.
        </Text>
      </FadingText>

      <FadingText delay={9} seconds={2}>
        <Text textStyle="homeText3" pt="30px">
          care to give it a try?
        </Text>
      </FadingText>

      <FadingText delay={10} seconds={2}>
        <Button variant="outlined" onClick={tempHandleGoogleSignIn} px="30px" py="25px">
          <Text textStyle="buttonText1">login with google</Text>
        </Button>
      </FadingText>
    </>
  );
};
export default ModalLeftText;
