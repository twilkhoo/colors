import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Textarea,
  keyframes,
  useDisclosure,
} from "@chakra-ui/react";
import ColorModal from "./ColorModal";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import useAuth from "@/hooks/useAuth";
import { UserDoc } from "../withAuth";
import {
  convertDateObjToDateStr,
  convertDateStrToDateObj,
  convertDateStrToNormalDate,
} from "./dateFuncs";

type CreateProps = {
  userDocs: Map<string, UserDoc>;
  refreshUserDocsState: () => void;
  dateStr: string;
  editPastDate: (newDateStr: string) => void;
};

// The fade-out animation for the saving changes/saved note.
const savedAnimation = () =>
  keyframes`
    0% { 
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% { 
      opacity: 0;
    } 
  `;

const Create = ({
  userDocs,
  refreshUserDocsState,
  dateStr,
  editPastDate,
}: CreateProps) => {
  const [fetchingCreate, setFetchingCreate] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const [mood, setMood] = useState(0);
  const [note, setNote] = useState("");

  const todayDate = new Date();
  const todayDateStr = convertDateObjToDateStr(todayDate);
  const specifiedDate = convertDateStrToDateObj(dateStr);
  const textDateStr =
    todayDate.toDateString() === specifiedDate.toDateString()
      ? "today"
      : convertDateStrToNormalDate(dateStr);

  const docPath = doc(db, `users/${user?.uid}/colors/${dateStr}`);

  // State representing what the saving note should say.
  const [saveState, setSaveState] = useState(0); // 0 => saved, 1 => unsaved changes, 2 => saving..., 3 => error
  let saveStateStr = "";
  if (saveState == 0) {
    saveStateStr = "saved.";
  } else if (saveState == 1) {
    saveStateStr = "unsaved changes.";
  } else if (saveState == 2) {
    saveStateStr = "saving...";
  } else {
    saveStateStr =
      "error while saving, please save the note, refresh the page and try again.";
  }

  const onSave = async () => {
    const docData = {
      mood: mood,
      note: note,
    };
    try {
      setSaveState(2);
      await setDoc(docPath, docData);
      setSaveState(0);
      refreshUserDocsState();
    } catch (err) {
      setSaveState(3);
      console.error(`Error while saving to firebase, ${err}.`);
    }
  };

  // Initial function to read today's data.
  const readTodayDoc = () => {
    const curDoc = userDocs.get(dateStr);
    if (curDoc) {
      setMood(curDoc.mood);
      setNote(curDoc.note);
    } else {
      setMood(0);
      setNote("");
    }
  };

  const goBackToToday = () => {
    editPastDate(todayDateStr);
  };

  // Invoking the initial read.
  useEffect(() => {
    readTodayDoc();
  }, [userDocs, dateStr]);

  return (
    <Box my="50px">
      <Flex alignItems="flex-end">
        <Text textStyle="homeText1">{textDateStr}</Text>
        {textDateStr !== "today" && (
          <Text
            textStyle="backToToday"
            ml="20px"
            mb="10px"
            onClick={() => goBackToToday()}
            _hover={{ cursor: "pointer" }}
          >
            {"< today"}
          </Text>
        )}
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
          <ColorModal
            isOpen={isOpen}
            onClose={onClose}
            setMood={setMood}
            setSaveState={setSaveState}
          />
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
            focusBorderColor="white"
            textStyle="noteText"
            _placeholder={{ color: "rgba(255, 255, 255, 0.5)" }}
            transition="box-shadow 0.5s ease-in-out"
            _hover={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setSaveState(1);
            }}
          />
        </Flex>
      </SimpleGrid>

      <Flex justifyContent="center" m="20px">
        <Button variant="outlined" px="20px" py="30px">
          <Text textStyle="buttonText1" onClick={onSave}>
            save
          </Text>
        </Button>
      </Flex>

      <Flex justifyContent="center" m="20px">
        <Text
          textStyle="sideNote"
          textDecoration={saveState % 2 == 1 ? "underline" : "none"}
          color={saveState % 2 == 1 ? "warning.100" : "white"}
          animation={
            saveState == 0 ? `${savedAnimation()} 5s forwards` : "none"
          }
        >
          {saveStateStr}
        </Text>
      </Flex>
    </Box>
  );
};
export default Create;
