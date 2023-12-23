import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box my="50px">
      <Text align="center" textStyle="homeText3" my="50px">
        with chromatic;notes, you can
      </Text>

      <Grid templateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }} gap="20px">
        <GridItem>
          <Text textStyle="homeText4">1. Collect</Text>
          <Text textStyle="homeText2">
            Our journal app empowers you to effortlessly gather and organize
            your thoughts, ideas, and experiences in one convenient space.
            Whether it's snippets of inspiration, fleeting moments, or profound
            insights, you can note down important details about your day in one
            location, and keep of how you felt through a simple yet significant
            color. Your collected fragments will become the building blocks of
            self-discovery and creative exploration.
          </Text>
        </GridItem>
        <GridItem>
          <Text textStyle="homeText4">2. Reflect</Text>
          <Text textStyle="homeText2">
            Delve into the realm of introspection by reflecting on your past
            days. As you revisit your entries, this journal encourages you to
            connect the dots, identify patterns, and gain a deeper understanding
            of your emotions and thoughts. The colors futher aid in
            contemplation, making each journal session a transformative journey.
            Use the power of reflection to foster personal growth, enhance
            decision-making, and refine your life's narrative.
          </Text>
        </GridItem>
        <GridItem>
          <Text textStyle="homeText4">3. Observe</Text>
          <Text textStyle="homeText2">
            Heighten your awareness of your progress and emotional goals through
            observing past entries you've made. This aspect of the journal
            encourages you to document your observations - from daily
            occurrences to the subtleties of nature or the pulse of urban life.
            The colors provide a quick, high-level overview of how you've felt
            throughout the months and years past, and your personal notes allow
            you to see how far you've come in greater detail.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Description;
