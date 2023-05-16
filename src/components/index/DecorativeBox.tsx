import { Box, Flex, keyframes, useTheme } from "@chakra-ui/react";

const scaleAnimation = (index: number, theme: any) => {
  const rng = (((index * 17) % 6) + 1) * 100;

  let topOffset = 0;
  let leftOffset = 0;
  let opacity = 0;

  if (index >= 1 && index <= 4) {
    topOffset = -80;
    leftOffset = 40 * (index - 1);
  }
  if (index >= 5 && index <= 11) {
    topOffset = -40;
    leftOffset = 40 * (index - 8);
  }
  if (index >= 12 && index <= 18) {
    topOffset = 0;
    leftOffset = 40 * (index - 15);
  }
  if (index >= 19 && index <= 25) {
    topOffset = 40;
    leftOffset = 40 * (index - 22);
  }
  if (index >= 26 && index <= 30) {
    topOffset = 80;
    leftOffset = 40 * (index - 29);
  }
  if (index == 15) opacity = 1;

  return keyframes`
    0% {
      scale: 1;
      top: 0px;
      left: 0px;
      opacity: ${opacity};
      border-radius: 40px;
      background: transparent;
    }

    7% {
      background: ${theme.colors.moods["100"]}; 
    }

    14% {
      background: ${theme.colors.moods["200"]}; 
    }

    21% {
      background: ${theme.colors.moods["300"]}; 
    }

    28% {
      background: ${theme.colors.moods["400"]}; 
    }

    35% {
      background: ${theme.colors.moods["500"]}; 
    }

    42% {
      background: ${theme.colors.moods["600"]}; 
    }

    50% {
      scale: 1;
      top: 0px;
      left: 0px;
      opacity: ${opacity};
      border-radius: 40px;
      background: transparent;
    }

    60% {
      scale: 1;
      top: 0px;
      left: 0px;
      opacity: ${opacity};
      border-radius: 40px;
      background: transparent;
    }

    70% {
      scale: calc(1/7);
      top: ${topOffset}px;
      left: ${leftOffset}px;
      opacity: 1;
      border-radius: 80px;
      background: ${theme.colors.moods[`${rng}`]};
    }
    80% {
      scale: calc(1/7);
      top: ${topOffset}px;
      left: ${leftOffset}px;
      opacity: 1;
      border-radius: 80px;
      background: ${theme.colors.moods[`${rng}`]};
    }
    90% {
      scale: 1;
      top: 0px;
      left: 0px;
      opacity: ${opacity};
      border-radius: 40px;
    }
    100% {
      scale: 1;
      top: 0px;
      left: 0px;
      opacity: ${opacity};
      border-radius: 40px;
    }
  `;
};

const DecorativeBox = () => {
  const theme = useTheme();

  const baseArr = Array.from(Array(31).keys());

  return (
    <Flex justifyContent="center">
      <Box>
        <Flex justifyContent="center" position="relative">
          <Box w="280px" h="280px">
            {baseArr.map((index) => (
              <Box
                position="absolute"
                width="280px"
                height="280px"
                borderWidth="5px"
                borderColor="white"
                animation={`${scaleAnimation(
                  index,
                  theme
                )} 30s ease-in-out infinite`}
                zIndex={30}
                key={`DecorativeBox${index}`}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DecorativeBox;
