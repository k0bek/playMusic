import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "firebase/config";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useAuthContext } from "hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { useLogin } from "hooks/useLogin";

export const useFormLogin = () => {
	const { login, error, isPending } = useLogin();
	const navigate = useNavigate();
	const { user } = useAuthContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setError,
		setValue,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onTouched",
		criteriaMode: "all",
	});

	const onSubmit = async () => {
		const { email, password } = getValues();

		const signInMethods = await fetchSignInMethodsForEmail(auth, email);

		if (signInMethods.length === 0) {
			setError("email", {
				message: "Email not found. Please check or create a new account.",
			});
			setValue("password", "");
		} else {
			await login(email, password);
		}
	};

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user, navigate]);

	return { handleSubmit, onSubmit, register, errors, isPending, error };
};
