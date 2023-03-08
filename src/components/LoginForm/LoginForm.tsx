import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [name, setName] = useState<string>();

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div>
					<h2 className={styles.heading}>
						Welcome to play<b className={styles.bolded}>M</b>usic
					</h2>
					<p className={styles["dark-text"]}>Create your account</p>
				</div>

				<div>
					<label htmlFor="email" className={styles["dark-text"]}>
						Email:
					</label>
					<Input
						type="email"
						id="email"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							console.log("kurwa");
							setEmail(event.target.value);
						}}
						placeholder={"Your email"}
					/>
				</div>
				<div>
					<label htmlFor="password" className={styles["dark-text"]}>
						Password:
					</label>
					<Input
						type="password"
						id="password"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							console.log("kurwa");
							setPassword(event.target.value);
						}}
						placeholder={"Your password"}
					/>
				</div>
				<div>
					<label htmlFor="name" className={styles["dark-text"]}>
						Name:
					</label>
					<Input
						type="name"
						id="text"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							console.log("kurwa");
							setName(event.target.value);
						}}
						placeholder={"Your name"}
					/>
				</div>
				<Button />
				<p className={styles.login}>
					Have an account? <span className={styles["login-text"]}>Log in.</span>
				</p>
			</form>
		</>
	);
};

export default LoginForm;
