import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import FadingText from "@/components/index/FadingText";
import InfoModal from "./InfoModal";

const LeftText = ({ seconds }: { seconds: number }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const { login } = useAuth();

  const tempHandleGoogleSignIn = async () => {
    await login();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      const data = res.data;
      const date = new Date();
      const index =
        ((date.getDate() + date.getMonth() + date.getFullYear()) * 13) %
        data.length;

      setQuote(data[index].text);
      setAuthor(data[index].author);
    });
  }, []);

  return (
    <Box borderWidth={5} borderColor="black">
      <FadingText delay={2} seconds={seconds}>
        {" "}
        <Text textStyle="homeText1">welcome, or welcome back,</Text>{" "}
      </FadingText>
      <FadingText delay={4} seconds={seconds}>
        {" "}
        <Text textStyle="homeText1">
          it's nice to hear from you again.
        </Text>{" "}
      </FadingText>
      <FadingText delay={6} seconds={seconds}>
        <Text textStyle="homeText1" pt="50px">
          your quote for today is-
        </Text>
      </FadingText>
      <FadingText delay={8} seconds={seconds}>
        <Text textStyle="homeText1" fontStyle="italic" pl="50px">
          ; {quote}
        </Text>
      </FadingText>
      <FadingText delay={9} seconds={seconds}>
        <Text textStyle="homeText2" pl="50px">
          ; {author ? author : "unknown"}
        </Text>
      </FadingText>

      <FadingText delay={11} seconds={seconds}>
        <Text textStyle="homeText1" pt="50px">
          {" "}
          ready?{" "}
        </Text>
      </FadingText>

      <FadingText delay={12} seconds={seconds}>
        <Button
          variant="outlined"
          onClick={tempHandleGoogleSignIn}
          px="80px"
          py="30px"
        >
          <Text textStyle="buttonText1">enter</Text>
        </Button>
      </FadingText>

      <FadingText delay={14} seconds={seconds}>
        <Button
          onClick={onOpen}
          variant="text"
          p={0}
          textDecoration="underline"
        >
          <Text textStyle="homeText2">(what is chromatic;notes?)</Text>
        </Button>
      </FadingText>

      <InfoModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default LeftText;
