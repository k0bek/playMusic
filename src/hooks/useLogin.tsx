import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<null | boolean | string>(null);
	const { dispatch } = useAuthContext();

	const setIsPendingAndError = (
		pending: boolean,
		error: boolean | null | string
	) => {
		setIsPending(pending);
		setError(error);
	};

	const login = async (email: string, password: string) => {
		try {
			setIsPendingAndError(false, null);
			const response = await signInWithEmailAndPassword(auth, email, password);

			if (!response) {
				throw new Error("Cannot login properly");
			}

			dispatch({ type: "LOGIN", payload: response.user });

			setIsPending(false);
		} catch (error) {
			if (error instanceof Error) {
				setIsPendingAndError(false, error.message);
			}
		}
	};

	return { error, isPending, login };
};
