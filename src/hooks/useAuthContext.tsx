import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Cannot load AuthContext");
  }

  return context;
}
