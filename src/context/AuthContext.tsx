import { ReactNode } from "react";
import { createContext, useEffect, useReducer } from "react";
import { auth } from "firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { UserDataType } from "types/UserDataType";

interface AuthContextType {
  user: UserDataType | null;
  dispatch: React.Dispatch<AuthContextAction>;
  isUserLoading?: boolean;
}

interface AuthContextAction {
  type: "LOGIN" | "LOGOUT" | "LOGGED";
  payload?: UserDataType | unknown;
  isUserLoading?: boolean;
}

interface AuthContextState {
  user: UserDataType | null;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

const initialAuthContext: AuthContextType = {
  user: null,
  dispatch: () => {},
  isUserLoading: undefined,
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

const reducer = (state: AuthContextState, action: AuthContextAction) => {
  const { type, payload, isUserLoading } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload as UserDataType,
      };
    case "LOGOUT":
      return { ...state, user: null };
    case "LOGGED":
      return {
        ...state,
        user: payload as UserDataType,
        isUserLoading: isUserLoading,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    isUserLoading: true,
  });

  useEffect(() => {
    dispatch({ type: "LOGGED", isUserLoading: true });

    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "LOGGED",
        payload: user,
        isUserLoading: false,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
