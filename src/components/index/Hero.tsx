import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import FadingText from "@/components/index/FadingText";

const Hero = () => {
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
      const fullAuthor = data[index].author.split(/[,]/);
      setAuthor(fullAuthor[0]);
    });
  }, []);

  return (
    <Flex h={`calc(100vh - 100px)`} justifyContent="center" alignItems="center">
      <Grid templateColumns={{ base: "1fr", xl: "60% 40%" }} gap="20px">
        <GridItem>
          <Box>
            <FadingText delay={1}>
              <Text textStyle="homeText1">{quote}</Text>
            </FadingText>
            <FadingText delay={2}>
              <Text textStyle="homeText2">- {author ? author : "unknown"}</Text>
            </FadingText>
            <FadingText delay={3}>
              <Text textStyle="homeText3" pt="50px">
                {" "}
                ready to journal?{" "}
              </Text>
            </FadingText>
            <FadingText delay={4}>
              <Button
                variant="outlined"
                onClick={tempHandleGoogleSignIn}
                px="50px"
                py="30px"
                mt="20px"
              >
                <Text textStyle="buttonText1">enter</Text>
              </Button>
            </FadingText>
          </Box>
        </GridItem>
        <GridItem>
          <FadingText delay={4}>
            <Image src="/handnote.png" w="calc(min(500px, 100%))" />
          </FadingText>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Hero;
