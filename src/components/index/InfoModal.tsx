import {
  Box,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        maxWidth={`calc(min(75%, 1500px))`}
        bg="rgba(255, 255, 255, 0.3)"
        marginY="100px"
        p="40px"
      >
        <ModalCloseButton color="white"/>
        <ModalBody overflow="hidden" p={0}>
            <Grid templateColumns={{ base: "1fr", xl: "60% 40%" }} gap="20px">
              <GridItem>
                <ModalLeftText onClose={onClose} />
              </GridItem>
              <GridItem>
                <ModalDecorativeBox />
              </GridItem>
            </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default InfoModal;
