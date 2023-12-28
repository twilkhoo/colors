import { Box, Flex } from "@chakra-ui/react";
import withAuth, { UserDoc } from "@/components/withAuth";
import IndexBackground, {
  scrollToTop,
} from "@/components/background/IndexBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Create from "@/components/journal/Create";
import View from "@/components/journal/View";
import {  useState } from "react";
import { convertDateObjToDateStr } from "@/components/journal/dateFuncs";

type JournalProps = {
  userDocs: Map<string, UserDoc>;
  refreshUserDocsState: () => void;
};

const Journal = ({ userDocs, refreshUserDocsState }: JournalProps) => {
  const todaysDate = new Date();
  let todaysDateStr = convertDateObjToDateStr(todaysDate);
  const [dateStr, setDateStr] = useState(todaysDateStr);

  const editPastDate = (newDateStr: string) => {
    scrollToTop();
    setDateStr(newDateStr);
  };

  return (
    <IndexBackground>
      <Flex justifyContent="center">
        <Box w="calc(min(1920px, 100%))" px={[25, null, 50, 100, 150, 200]}>
          <Navbar text="leave" />
          <Box px={[10, null, 25, 50, 100, 100]}>
            <Create
              userDocs={userDocs}
              refreshUserDocsState={refreshUserDocsState}
              dateStr={dateStr}
              editPastDate={editPastDate}
            />
            <View userDocs={userDocs} editPastDate={editPastDate} />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </IndexBackground>
  );
};

export default withAuth(Journal);
