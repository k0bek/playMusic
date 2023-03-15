import React, { useState } from "react";
import { auth } from "../firebase/config";

type ErrorType = null | boolean | string;

export const useLogout = async () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<ErrorType>(null);

	const setIsPendingAndError = (pending: boolean, error: boolean | null) => {
		setIsPending(pending);
		setError(error);
	};

	try {
		setIsPendingAndError(true, false);

		await auth.signOut();

		setIsPendingAndError(false, true);
	} catch (error) {
		if (error instanceof Error) {
			setError(error.message);
		}
		setIsPending(false);
	}
};
