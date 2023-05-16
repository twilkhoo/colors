import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  Tooltip,
  useTheme,
} from "@chakra-ui/react";

type ColorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setMood: (num: number) => void;
};

const ColorModal = ({ isOpen, onClose, setMood }: ColorModalProps) => {
  const theme = useTheme();

  const baseArr = Array.from(Array(6).keys());

  const handleMoodChange = (index: number) => {
    setMood(index + 1);
    onClose();
  };

  const colorDesc = (index: number) => {
    let str = "bruh";
    return str;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
      <ModalOverlay
        bg="rgba(255, 255, 255, 0.3)"
        backdropFilter="auto"
        backdropBlur="2px"
      />
      <ModalContent
        maxWidth={`calc(min(75%, 1500px))`}
        bg="rgba(0, 0, 0, 0.3)"
        marginY="100px"
        p="40px"
      >
        <ModalCloseButton color="white" />
        <ModalBody overflow="hidden" p={0}>
          <Flex justifyContent="center" my="30px">
            <SimpleGrid columns={[3, null, 3, 3, 3, 6]} spacing="20px">
              {baseArr.map((index) => (
                <Tooltip
                  placement="top-start"
                  label={colorDesc(index)}
                  key={`ColorModal${index}`}
                >
                  <Box
                    w={["50px", null, "75px", "100px", "100px", "150px"]}
                    h={["50px", null, "75px", "100px", "100px", "150px"]}
                    borderWidth="2px"
                    borderRadius="10px"
                    transition="box-shadow 0.5s ease-in-out"
                    borderColor="white"
                    background={`moods.${(index + 1) * 100}`}
                    onClick={() => handleMoodChange(index)}
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <Text textStyle="modalSub" m={1}>{index + 1}</Text>
                  </Box>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Flex>
          <Text textStyle="colorModal">
            select a color by clicking one above.
          </Text>
          <Text textStyle="colorModal">red implies happier days.</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ColorModal;
