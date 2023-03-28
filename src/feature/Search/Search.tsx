import { Input } from "components/Input";
import { useAuthContext } from "hooks/useAuthContext";
import { useSongContext } from "hooks/useSongContext";
import { useState } from "react";
import styles from "./Search.module.scss";

export const Search = () => {
	const { user } = useAuthContext();
	const { searchValue, setSearchValue } = useSongContext();

	return (
		<>
			<div className={styles["search-box"]}>
				<p className={styles.name}>
					{user ? "Hello, " + user.displayName : "Welcome to our app."}
				</p>
				<p className={styles.question}>
					{user
						? "What do you want to listen today?"
						: "Please log in to access all features."}
				</p>
				<Input
					type="text"
					placeholder="Search music"
					value={searchValue}
					onChange={(event) => {
						setSearchValue(event.target.value);
					}}
				/>
			</div>
		</>
	);
};
