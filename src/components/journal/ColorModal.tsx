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
} from "@chakra-ui/react";

type ColorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setMood: (num: number) => void;
  setSaveState: (num: number) => void;
};

const ColorModal = ({ isOpen, onClose, setMood, setSaveState }: ColorModalProps) => {

  const baseArr = Array.from(Array(6).keys());

  const handleMoodChange = (index: number) => {
    setMood(index + 1);
    setSaveState(1);
    onClose();
  };

  const colorDesc = (index: number) => {
    index++;
    let str = "";
    
    if (index == 1) {
      str = "1- Terrible day."
    } else if (index == 2) {
      str = "2- Not a great day."
    } else if (index == 3) {
      str = "3- Average, slightly down day."
    } else if (index == 4) {
      str = "4- Average, slightly positive day."
    } else if (index == 5) {
      str = "5- Feeling good!"
    } else if (index == 6) {
      str = "6- Amazing day!"
    }

    
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
                    <Text textStyle="modalSub" mx="10px" my="4px">{index + 1}</Text>
                  </Box>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Flex>
          <Flex justifyContent="center">
            <Text textStyle="colorModal">
              Select a color by clicking one above, red implies happier days.
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ColorModal;
