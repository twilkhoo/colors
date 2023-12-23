import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const ChromeElem = () => {
  return (
    <Box mx="50px">
      <Grid
        templateColumns={{ base: "1fr", xl: "75% 25%" }}
        my="100px"
      >
        <GridItem>
          <Box mr="50px">
            <Text textStyle="homeText1">Update! Get the Chrome Extension</Text>
            <Text textStyle="homeText2" fontWeight="900">Released August 10, 2023</Text>
            <Text textStyle="homeText2">
              With this new chrome extension, you can easily add and update daily
              notes. From the extension, select a color, attach an optional note,
              and press save. As always, this will automatically be recorded on
              the website for you to view later!
            </Text>
            <Button
                variant="outlined"
                onClick={() => window.open("https://www.google.com/", "_blank")}
                px="50px"
                py="30px"
                mt="20px"
              >
                <Text textStyle="buttonText1">download</Text>
              </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Image src="/chrome.svg"  />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default ChromeElem;
