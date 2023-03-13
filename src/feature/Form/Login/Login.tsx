import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "../../../components";
import { Welcome } from "../components/Welcome";
import styles from "./Login.module.scss";

export const Login = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [name, setName] = useState<string>();

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<Welcome text={"To continue, log in to playMusic."} />
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

				<Button type="button">Log in</Button>
				<p className={styles.login}>
					Don't have an account?
					<span className={styles["login-text"]}>
						<Link to="/signup" className={styles["login-text"]}>
							Sign up.
						</Link>
					</span>
				</p>
			</form>
		</>
	);
};
