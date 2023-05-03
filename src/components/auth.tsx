import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/journal");
    } catch(err) {
      console.error(err);
    }
  }

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }

  return (
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
  );
}
