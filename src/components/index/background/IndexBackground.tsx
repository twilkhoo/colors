import {
  Box,
  Button,
  Flex,
  Heading,
  keyframes,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const backgroundPulse = (theme: any) =>
  keyframes`
    0% { 
      background: ${theme.colors.background["50"]}; 
    } 
    50% { 
      background: ${theme.colors.background["100"]}; 
    }
    100% { 
      background: ${theme.colors.background["50"]}; 
    } 
  `;

type IndexBackgroundProps = {
  children?: ReactNode;
};

const IndexBackground = ({ children }: IndexBackgroundProps) => {
  const theme = useTheme();

  return (
    <Box
      animation={`${backgroundPulse(theme)} 20s ease-in-out infinite`}
      height="100vh"
      width="100vw"
      overflow="auto"
    >
      {children}
    </Box>
  );
};

export default IndexBackground;
