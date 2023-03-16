import { createContext, useReducer } from "react";
import { ReactNode } from "react";
import { UserDataType } from "./../types/UserDataType";

type AuthContextType = {
	user?: UserDataType | null;
	dispatch: React.Dispatch<AuthContextAction>;
} | null;

interface AuthContextAction {
	type: "LOGIN" | "LOGOUT";
	payload?: UserDataType | unknown;
}

interface AuthContextState {
	user: UserDataType | null;
}

type ChildrenType = {
	children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(null);

const reducer = (state: AuthContextState, action: AuthContextAction) => {
	const { type, payload } = action;

	console.log(payload);

	switch (type) {
		case "LOGIN":
			return { ...state, user: payload as UserDataType };
		case "LOGOUT":
			return { ...state, user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, { user: null });

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
