import { Input } from "components/Input/Input";
import { useAuthContext } from "hooks/useAuthContext";
import { useSongContext } from "hooks/useSongContext";
import styles from "./Search.module.scss";
import { ChangeEvent } from "react";

export const Search = () => {
	const { user } = useAuthContext();
	const { searchedValue, handleSearchedValue } = useSongContext();

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
					value={searchedValue}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						handleSearchedValue(event.target.value);
					}}
				/>
			</div>
		</>
	);
};
