import { Link, useNavigate } from "react-router-dom";
import { Input, InputError } from "../../../components/Input";
import { Button } from "../../../components/Button";
import styles from "./Signup.module.scss";
import { Label } from "../../../components/Label";
import { Welcome } from "../components/Welcome";
import { useForm } from "react-hook-form";
import { regex } from "../../../constants/regex";
import { useSignup } from "../../../hooks/useSignup";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "./../../../firebase/config";
import { fetchSignInMethodsForEmail } from "firebase/auth";

export const Signup = () => {
	const { isPending, signup } = useSignup();

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setError,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
		mode: "onTouched",
		criteriaMode: "all",
	});

	const onSubmit = async () => {
		const { email, password, name } = getValues();

		const signInMethods = await fetchSignInMethodsForEmail(auth, email);

		if (signInMethods.length > 0) {
			setError("email", { message: "This email is already in use." });
		} else {
			await signup(email, password, name);
			navigate("/");
		}
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Welcome text="Create your account" />

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
							minLength: {
								value: 6,
								message: "Your password is too short.",
							},
						})}
					/>
					{errors?.password?.message && (
						<InputError>{errors?.password?.message}</InputError>
					)}
				</div>

				<div>
					<Label type="name">Name</Label>
					<Input
						type="text"
						placeholder="Your name"
						register={register("name", {
							required: "You need to enter your name.",
						})}
					/>
					{errors?.name?.message && (
						<InputError>{errors?.name?.message}</InputError>
					)}
				</div>

				{!isPending && <Button type="submit">Create an account</Button>}
				{isPending && (
					<Button type="submit" disabled={true}>
						Loading
					</Button>
				)}
				<p className={styles.login}>
					Have an account?{" "}
					<span>
						<Link to="/" className={styles["login-text"]}>
							Log in.
						</Link>
					</span>
				</p>
			</form>
		</>
	);
};
