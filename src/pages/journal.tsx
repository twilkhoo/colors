import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import withAuth from "@/components/withAuth";
import useAuth from "@/hooks/useAuth";

const Journal = () => {
  const { user, logout } = useAuth();

  const tempHandleSignOut = async () => {
    await logout();
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box>
        <Heading>Journal</Heading>
        <Text>Hello, {user?.displayName}</Text>
        <Button onClick={tempHandleSignOut}>Sign out</Button>
      </Box>
    </Flex>
  );
};

export default withAuth(Journal);
