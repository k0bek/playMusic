import { Link } from "react-router-dom";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { Label } from "components/Label/Label";
import { InputError } from "components/Input/InputError/InputError";
import { Welcome } from "../components/Welcome/Welcome";
import { regexEmail } from "constants/regexEmail";
import styles from "./Login.module.scss";
import { useFormLogin } from "./hooks/useFormLogin";

export const Login = () => {
	const { handleSubmit, onSubmit, register, errors, isPending, error } =
		useFormLogin();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Welcome text={"To continue, log in to playMusic."} />

			<div>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="Your email"
					register={register("email", {
						required: "You need to enter your email.",
						pattern: {
							value: regexEmail,
							message: "This email is invalid.",
						},
					})}
				/>
				{errors?.email?.message && (
					<InputError>{errors.email.message}</InputError>
				)}
			</div>

			<div>
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
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

			<Button type="submit" disabled={isPending} className="main-button">
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
