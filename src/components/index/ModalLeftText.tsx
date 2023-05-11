import { Box, Button, Text } from "@chakra-ui/react";
import FadingText from "./FadingText";

type ModalLeftTextProps = {
  onClose: () => void;
};

const ModalLeftText = ({ onClose }: ModalLeftTextProps) => {

  return (
    <>
      <FadingText delay={1} seconds={2}>
        <Text textStyle="homeText3" id="secondPart">
          chromatic;notes is a{" "}
          <Box as="span" textDecoration="line-through">
            journal
          </Box>{" "}
          emotion tracker.
        </Text>
      </FadingText>

      <FadingText delay={3} seconds={2}>
        <Text textStyle="homeText3">
          once a day, you pick a color representing how you feel.
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
        <Text textStyle="homeText3" pt="50px">
          care to give it a try?
        </Text>
      </FadingText>

      <FadingText delay={10} seconds={2}>
        <Button variant="outlined" onClick={onClose} px="30px" py="25px">
          <Text textStyle="buttonText2">return</Text>
        </Button>
      </FadingText>
    </>
  );
};
export default ModalLeftText;
