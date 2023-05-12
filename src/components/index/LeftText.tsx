import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import FadingText from "@/components/index/FadingText";

const LeftText = ({ seconds }: { seconds: number }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const { login } = useAuth();

  const tempHandleGoogleSignIn = async () => {
    await login();
  };

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
    <Flex justifyContent="center" my="100px">
      <Box textAlign="center">
        <FadingText delay={8} seconds={seconds}>
          <Text textStyle="homeText1">{quote}</Text>
        </FadingText>
        <FadingText delay={9} seconds={seconds}>
          <Text textStyle="homeText2">; {author ? author : "unknown"}</Text>
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
            px="50px"
            py="30px"
          >
            <Text textStyle="buttonText1">enter</Text>
          </Button>
        </FadingText>

      </Box>
    </Flex>
  );
};

export default LeftText;
