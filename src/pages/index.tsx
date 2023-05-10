import { Grid, GridItem, useMediaQuery, useTheme } from "@chakra-ui/react";
import IndexBackground from "@/components/index/IndexBackground";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import LeftText from "@/components/index/LeftText";
import DecorativeBox from "@/components/index/DecorativeBox";

const Home = () => {
  const theme = useTheme();
  const [isLargerThanXl] = useMediaQuery(
    `(min-width: ${theme.breakpoints.xl})`
  );

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <IndexBackground>
      <Navbar />
      <Grid templateColumns={{ base: "1fr", xl: "60% 40%" }}>
        <GridItem>
          {isLargerThanXl ? <LeftText seconds={seconds} /> : <DecorativeBox />}
        </GridItem>
        <GridItem>
          {!isLargerThanXl ? <LeftText seconds={seconds} /> : <DecorativeBox />}
        </GridItem>
      </Grid>
    </IndexBackground>
  );
};

export default Home;
