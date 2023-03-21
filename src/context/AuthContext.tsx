import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { ReactNode } from "react";
import { UserDataType } from "types/UserDataType";
import { auth } from "firebase/config";

type AuthContextType = {
	user?: UserDataType | null;
	dispatch: React.Dispatch<AuthContextAction>;
	initUserLoggedLoading?: boolean;
} | null;

interface AuthContextAction {
	type: "LOGIN" | "LOGOUT" | "LOGGED";
	payload?: UserDataType | unknown;
	initUserLoggedLoading?: boolean;
}

interface AuthContextState {
	user: UserDataType | null;
}

type ChildrenType = {
	children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(null);

const reducer = (state: AuthContextState, action: AuthContextAction) => {
	const { type, payload, initUserLoggedLoading } = action;

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
				initUserLoggedLoading: initUserLoggedLoading,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, {
		user: null,
		initUserLoggedLoading: true,
	});

	useEffect(() => {
		dispatch({ type: "LOGGED", initUserLoggedLoading: true });

		onAuthStateChanged(auth, (user) => {
			dispatch({
				type: "LOGGED",
				payload: user,
				initUserLoggedLoading: false,
			});
		});
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
