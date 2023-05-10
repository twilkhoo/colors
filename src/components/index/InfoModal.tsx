import {
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import ModalLeftText from "./ModalLeftText";
import ModalDecorativeBox from "./ModalDecorativeBox";

type InfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  const theme = useTheme();
  const [isLargerThanXl] = useMediaQuery(
    `(min-width: ${theme.breakpoints.xl})`
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        maxWidth={`calc(min(75%, 1500px))`}
        bg="rgba(255, 255, 255, 0.3)"
      >
        <ModalBody>
          <Grid templateColumns={{ base: "1fr", xl: "60% 40%" }}>
            <GridItem>
              {isLargerThanXl ? (
                <ModalLeftText onClose={onClose} />
              ) : (
                <ModalDecorativeBox />
              )}
            </GridItem>

            <GridItem>
              {!isLargerThanXl ? (
                <ModalLeftText onClose={onClose} />
              ) : (
                <ModalDecorativeBox />
              )}
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default InfoModal;
