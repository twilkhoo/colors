import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

export type UserDoc = {
  mood: number;
  note: string;
}

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [userDocs, setUserDocs] = useState<Map<string, UserDoc>>(new Map());
    const [refreshUserDocs, setRefreshUserDocs] = useState(0);

    useEffect(() => {
      if (!loading) {
        setIsLoading(false);
        if (!user) {
          router.push("/");
        }
      }
    }, [user, loading, router]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log("trying to fetch all docs");
          const querySnapshot = await getDocs(collection(db, `users/${user?.uid}/colors`));
          const userDocsData = new Map<string, UserDoc>(); // Create a new Map

          querySnapshot.docs.forEach((doc) => {
            userDocsData.set(doc.id, { mood: doc.data().mood, note: doc.data().note }); // Add to the Map
          });
          setUserDocs(userDocsData); // Set the Map as the state
          setIsLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); // Call the async function
    }, [user, refreshUserDocs]);

    if (isLoading || isLoadingData) {
      return <Loading/>;
    }

    const refreshUserDocsState = () => {
      setRefreshUserDocs(refreshUserDocs + 1);
    }
    return <WrappedComponent {...props} userDocs={userDocs} refreshUserDocsState={refreshUserDocsState}/>;
  };

  return Wrapper;
};

export default withAuth;
