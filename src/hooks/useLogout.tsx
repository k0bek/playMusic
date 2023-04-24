import { useState } from "react";
import { auth } from "firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(false);
	const { dispatch } = useAuthContext();

	const setIsPendingAndError = (pending: boolean, error: boolean) => {
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
				setError(true);
			}
			setIsPending(false);
		}
	};

	return { logout, isPending, error };
};
