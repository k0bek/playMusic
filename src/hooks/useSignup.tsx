import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(false);
	const { dispatch } = useAuthContext();

	const setPendingAndError = (pending: boolean, error: boolean) => {
		setIsPending(pending);
		setError(error);
	};
	const signup = async (email: string, password: string, name: string) => {
		try {
			setPendingAndError(true, false);

			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (!response) {
				setIsPending(false);

				throw new Error("Signing up error");
			}

			const user = response.user;

			await updateProfile(user, {
				displayName: name,
			});

			dispatch({ type: "LOGIN", payload: user });
			setIsPending(false);
		} catch (error) {
			if (error instanceof Error) {
				setPendingAndError(false, true);
			}
		}
	};

	return { signup, isPending, error, setError };
};
