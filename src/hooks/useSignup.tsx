import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "./../firebase/config";

type AsyncStatusType = boolean | null | string;

export const useSignup = () => {
	const [isPending, setIsPending] = useState<AsyncStatusType>(false);
	const [error, setError] = useState<AsyncStatusType>(null);

	const setPendingAndError = (
		pending: AsyncStatusType,
		error: AsyncStatusType
	) => {
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
				setPendingAndError(false, null);
				throw new Error("Signing up error");
			}

			const user = response.user;

			await updateProfile(user, {
				displayName: "kuba",
			});
		} catch (error) {
			if (error instanceof Error) {
				setPendingAndError(false, error.message);
			}
		}
	};

	return { signup };
};
