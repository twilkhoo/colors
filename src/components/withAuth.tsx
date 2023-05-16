import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!loading) {
        setIsLoading(false);
        if (!user) {
          router.push("/");
        }
      }
    }, [user, loading, router]);

    if (isLoading) {
      return <Loading/>;
    }
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
