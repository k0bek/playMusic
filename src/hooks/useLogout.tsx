import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

type ErrorType = null | boolean | string;

export const useLogout = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<ErrorType>(null);
	const { dispatch } = useAuthContext();

	const setIsPendingAndError = (pending: boolean, error: boolean | null) => {
		setIsPending(pending);
		setError(error);
	};

	const logout = async () => {
		try {
			setIsPendingAndError(true, false);

			await auth.signOut();

			dispatch({ type: "LOGOUT" });
			setIsPendingAndError(false, true);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
			setIsPending(false);
		}
	};

	return { logout, isPending, error };
};
