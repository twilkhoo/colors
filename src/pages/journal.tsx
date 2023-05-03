import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
// import { useFirebaseAuth } from '../context/FirebaseAuthContext';
import { useRouter } from "next/router";
import withAuth from "@/components/withAuth";
import useAuth from "@/hooks/useAuth";

const Journal = () => {
  const { user, logout } = useAuth();

  async function tempHandleSignOut() {
    await logout();
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box>
        <Heading>Journal</Heading>
        <Text>Hello, {user?.displayName}</Text>
        <Button onClick={tempHandleSignOut}>Sign out</Button>
      </Box>
    </Flex>
  );
}

export default withAuth(Journal);
