import { Box, keyframes, useTheme } from "@chakra-ui/react";
import { ReactNode, RefObject, useRef } from "react";
import { useBrightness } from "../../context/BrightnessProvider";

type IndexBackgroundProps = {
  children?: ReactNode;
};

function convertToHexString(value: number): string {
  const clampedValue = Math.min(100, Math.max(0, value));
  const mappedValue = Math.round(((100 - clampedValue) / 100) * 255);
  const hexString = mappedValue.toString(16).padStart(2, "0");

  return hexString;
}

let scrollableBoxRef2: RefObject<HTMLDivElement>;
export const scrollToTop = () => {
  if (scrollableBoxRef2.current) {
    scrollableBoxRef2.current.scrollTop = 0;
  }
};

const IndexBackground = ({ children }: IndexBackgroundProps) => {
  const scrollableBoxRef = useRef<HTMLDivElement>(null);
  scrollableBoxRef2 = scrollableBoxRef;

  const { brightness } = useBrightness();
  const theme = useTheme();

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

  return (
    <Box
      animation={`${backgroundPulse(theme)} 20s ease-in-out infinite`}
      bg="blue"
      height="100vh"
      width="100vw"
      overflow="auto"
    >
      <Box
        height="100vh"
        width="100vw"
        overflow="auto"
        bg={"#000000" + convertToHexString(brightness)}
        ref={scrollableBoxRef}
        sx={{
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default IndexBackground;
