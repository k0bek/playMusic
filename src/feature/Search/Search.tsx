import { Input } from "../../components";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Search.module.scss";

export const Search = () => {
	const { user } = useAuthContext();

	console.log(user);
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
				<Input type="text" placeholder="Search music" />
			</div>
		</>
	);
};
