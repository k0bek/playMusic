import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = useAuthContext();

  const setIsPendingAndError = (pending: boolean, error: boolean) => {
    setIsPending(pending);
    setError(error);
  };

  const login = async (email: string, password: string) => {
    try {
      setIsPendingAndError(true, false);
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response?.user) {
        throw new Error("Cannot login properly");
      }

      dispatch({ type: "LOGIN", payload: response.user });

      setIsPending(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsPendingAndError(false, true);
      }
    }
  };

  return { error, isPending, login };
};
