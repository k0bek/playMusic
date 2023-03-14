import React, { useState } from "react";
import { boolean } from "zod";
import { auth } from "../firebase/config";

export const useLogout = async () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<null | boolean | string>(null);

	const setIsPendingAndError = (pending: boolean, error: boolean | null) => {
		setIsPending(pending);
		setError(error);
	};

	try {
		setIsPendingAndError(true, false);

		await auth.signOut();

		setIsPendingAndError(false, true);
	} catch (error) {
		setError(error.message);
		setIsPending(false);
	}
};
