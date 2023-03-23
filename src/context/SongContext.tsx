import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { ReactNode } from "react";
import { UserDataType } from "types/UserDataType";
import { auth } from "firebase/config";

type SongContext = {
	setSongId: any;
	songId: number | null;
};

type ChildrenType = {
	children: ReactNode;
};

export const SongContext = createContext({} as SongContext);

export const SongContextProvider = ({ children }: ChildrenType) => {
	const [songId, setSongId] = useState<null | number>(0);

	const value: SongContext = {
		setSongId,
		songId,
	};

	return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
