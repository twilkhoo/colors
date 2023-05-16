import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import ColorModal from "./ColorModal";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import useAuth from "@/hooks/useAuth";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();

  const [mood, setMood] = useState(0);
  const [note, setNote] = useState("");

  const date = new Date();
  let dateStr =
    `${date.getFullYear()}` +
    `${date.getMonth() + 1}`.padStart(2, "0") +
    `${date.getDate()}`.padStart(2, "0");
  const docPath = doc(db, `users/${user?.uid}/colors/${dateStr}`);

  const onSave = async () => {
    const docData = {
      mood: mood,
      note: note,
    };
    try {
      await setDoc(docPath, docData);
      console.log("saved");
    } catch (err) {
      console.log(`Error while saving to firebase, ${err}.`);
    }
  };

  const readTodayDoc = async () => {
    try {
      const curDoc = await getDoc(docPath);
      if (curDoc.exists()) {
        setMood(curDoc.data().mood);
        setNote(curDoc.data().note);
      } else {
        console.log("Note has not been added for today yet.");
      }
    } catch (err) {
      console.log(`Some other error occured while fetching, ${err}.`);
    }
  }

  useEffect(() => {
    if (user) readTodayDoc();
  }, [user]);

  return (
    <Box my="50px">
      <Flex alignItems="center" justifyContent="center" my="40px">
        <Text textStyle="homeText1" mr="20px">
          today
        </Text>
        <Button variant="outlined" px="20px" py="30px">
          <Text textStyle="homeText1" onClick={onSave}>
            save
          </Text>
        </Button>
      </Flex>

      <SimpleGrid columns={[1, null, 1, 1, 2]} spacing="20px">
        <Flex justifyContent={["center", null, "center", "center", "right"]}>
          <Box
            borderRadius="20px"
            borderWidth="2px"
            background={mood ? `moods.${mood * 100}` : "transparent"}
            w={["200px", null, "250px", "300px"]}
            h={["200px", null, "250px", "300px"]}
            onClick={onOpen}
            transition="box-shadow 0.5s ease-in-out"
            _hover={{
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
          <ColorModal isOpen={isOpen} onClose={onClose} setMood={setMood} />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent={["center", null, "center", "center", "left"]}
        >
          <Textarea
            resize="none"
            borderRadius="0px"
            borderWidth="2px"
            background="transparent"
            w="400px"
            h="200px"
            placeholder="add a note..."
            focusBorderColor="selection.100"
            textStyle="noteText"
            _placeholder={{ color: "rgba(255, 255, 255, 0.5)" }}
            transition="box-shadow 0.5s ease-in-out"
            _hover={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
export default Create;
