import { Link } from "react-router-dom";
import "firebase/auth";
import { Input } from "components/Input/Input";
import { InputError } from "components/Input/InputError/InputError";
import { Button } from "components/Button/Button";
import { Label } from "components/Label/Label";
import { Welcome } from "../components/Welcome/Welcome";
import { regexEmail } from "constants/regexEmail";
import styles from "./Signup.module.scss";
import { useFormSignup } from "./hooks/useFormSignup";

export const Signup = () => {
  const { onSubmit, isPending, signup, register, handleSubmit, errors } =
    useFormSignup();
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Welcome text="Create your account" />

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Your email"
          id="email"
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
          type="password"
          id="password"
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
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
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

      {!isPending && (
        <Button type="submit" disabled={false} className="main-button">
          Create an account
        </Button>
      )}
      {isPending && (
        <Button type="submit" disabled={false} className="main-button">
          Loading
        </Button>
      )}
      <p className={styles.login}>
        Have an account?{" "}
        <span>
          <Link to="/login" className={styles["login-text"]}>
            Log in.
          </Link>
        </span>
      </p>
    </form>
  );
};
