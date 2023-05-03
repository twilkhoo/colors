import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import useAuth from '../hooks/useAuth';
import { useRouter } from "next/router";


export default function Home() {
  const { user, login } = useAuth();

  async function tempHandleGoogleSignIn() {
    await login();
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box >
        <Heading>Hello World</Heading>
        <Text>User: {user?.displayName}</Text>
        <Button onClick={tempHandleGoogleSignIn}>Sign in with google</Button>
      </Box>
    </Flex>
  );
}
