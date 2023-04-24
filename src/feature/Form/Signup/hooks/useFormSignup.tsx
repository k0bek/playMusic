import { useForm } from "react-hook-form";
import { auth } from "firebase/config";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSignup } from "hooks/useSignup";

export const useFormSignup = () => {
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

  return { onSubmit, isPending, signup, register, handleSubmit, errors };
};
