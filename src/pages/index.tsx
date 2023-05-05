import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import IndexBackground from "@/components/index/background/IndexBackground";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import FadingText from "@/components/index/background/FadingText";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [firstTextToggleParent, setFirstTextToggleParent] = useState(true);
  const [firstTextToggle, setFirstTextToggle] = useState(true);

  const { login } = useAuth();

  const tempHandleGoogleSignIn = async () => {
    await login();
  };

  const MotionText = motion(Text);

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

  const handleTextToggle = async () => {
    setFirstTextToggle(!firstTextToggle);
    setTimeout(() => {setFirstTextToggleParent(!firstTextToggleParent)}, 1000)
  }

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <IndexBackground>
      <Navbar />

      {firstTextToggleParent && 
        <motion.div
          variants={variants}
          initial="visible"
          animate={firstTextToggle ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <Box mx={[25, null, 50, 75, 100, 150]} mt="100px">
            <FadingText delay={2}>
              {" "}
              <Text textStyle="homeText1">welcome, or welcome back,</Text>{" "}
            </FadingText>
            <FadingText delay={4}>
              {" "}
              <Text textStyle="homeText1">
                it's nice to hear from you again.
              </Text>{" "}
            </FadingText>
            <FadingText delay={6}>
              <Text textStyle="homeText1" pt="50px">
                your quote for today is-
              </Text>
            </FadingText>
            <FadingText delay={8}>
              <Text textStyle="homeText1" fontStyle="italic" pl="50px">
                ; {quote}
              </Text>
            </FadingText>
            <FadingText delay={9}>
              <Text textStyle="homeText2" pl="50px">
                ; {author}
              </Text>
            </FadingText>

            <FadingText delay={11}>
              <Text textStyle="homeText1" pt="50px">
                {" "}
                ready?{" "}
              </Text>
            </FadingText>

            <FadingText delay={12}>
              <Button
                variant="outlined"
                onClick={tempHandleGoogleSignIn}
                px="80px"
                py="30px"
              >
                <Text textStyle="buttonText1">enter</Text>
              </Button>
            </FadingText>

            <FadingText delay={14}>
              <Text
                onClick={handleTextToggle}
                textStyle="homeText2"
                textDecoration="underline"
                pt="25px"
                _hover={{ cursor: "pointer" }}
              >
                (what is chromatic;notes?)
              </Text>
            </FadingText>
          </Box>
        </motion.div>
      }

      {
        
      }

      {/* 
      <Box mx={[25, null, 50, 75, 100, 150]} mt="200px">
        <Text textStyle="homeText1" id="secondPart">
          chromatic;notes is a{" "}
          <Box as="span" textDecoration="line-through">
            journal
          </Box>{" "}
          emotion tracker.
        </Text>
        <Text textStyle="homeText1">
          once a day, you pick a color representing how you feel.
        </Text>
        <Text textStyle="homeText1">you can add a note if needed.</Text>
        <Text textStyle="homeText1">
          then, you can view how you've been feeling lately.
        </Text>
        <Text textStyle="homeText1" pt="50px">care to give it a try?</Text>
        <Button
          variant="outlined"
          onClick={tempHandleGoogleSignIn}
          px="80px"
          py="30px"
          mb="200px"
        >
          <Text textStyle="buttonText1">join with google</Text>
        </Button>
      </Box> */}
    </IndexBackground>
  );
};

export default Home;
