import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Label } from "components";
import { Welcome } from "../components/Welcome";
import styles from "./Login.module.scss";
import { regex } from "constants/regex";

import { useForm } from "react-hook-form";
import { InputError } from "components/Input";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "firebase/config";
import { useLogin } from "hooks/useLogin";
import { useAuthContext } from "hooks/useAuthContext";

export const Login = () => {
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

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Welcome text={"To continue, log in to playMusic."} />

			<div>
				<Label type="email">Email</Label>
				<Input
					type="email"
					placeholder="Your email"
					register={register("email", {
						required: "You need to enter your email.",
						pattern: {
							value: regex,
							message: "This email is invalid.",
						},
					})}
				/>
				{errors?.email?.message && (
					<InputError>{errors.email.message}</InputError>
				)}
			</div>

			<div>
				<Label type="password">Password</Label>
				<Input
					type="password"
					placeholder="Your password"
					register={register("password", {
						required: "You need to enter your password.",
					})}
				/>
				{errors?.password?.message && (
					<InputError>{errors?.password?.message}</InputError>
				)}

				{error && <InputError>Incorrect password</InputError>}
			</div>

			<Button type="submit" disabled={isPending}>
				{isPending ? "Logging in..." : "Log in"}
			</Button>

			<p className={styles.login}>
				Don't have an account?
				<span className={styles["login-text"]}>
					<Link to="/signup" className={styles["login-text"]}>
						Sign up.
					</Link>
				</span>
			</p>
		</form>
	);
};
