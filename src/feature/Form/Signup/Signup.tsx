import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import styles from "./Signup.module.scss";
import { Label } from "../../../components/Label";
import { Welcome } from "../components/Welcome";
import { useSignup } from "../../../hooks/useSignup";

export const Signup = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [name, setName] = useState<string>();
	const { signup } = useSignup();

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();
		if (email && password && name) {
			signup(email, password, name);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<Welcome text="Create your account" />

				<div>
					<Label type="email">Email</Label>
					<Input
						type="email"
						id="email"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setEmail(event.target.value);
						}}
						placeholder={"Your email"}
					/>
				</div>
				<div>
					<Label type="password">Password</Label>
					<Input
						type="password"
						id="password"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setPassword(event.target.value);
						}}
						placeholder={"Your password"}
					/>
				</div>
				<div>
					<Label type="name">Name</Label>
					<Input
						type="name"
						id="text"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setName(event.target.value);
						}}
						placeholder={"Your name"}
					/>
				</div>
				<Button text="Create an account" />
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
