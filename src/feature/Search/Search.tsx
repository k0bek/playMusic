import { Input } from "../../components";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Search.module.scss";

export const Search = () => {
	const { user } = useAuthContext();

	console.log(user);
	return (
		<>
			<div className={styles["search-box"]}>
				<p className={styles.name}>Hello {user && user.displayName},</p>
				<p className={styles.question}>What do you want to hear today?</p>
				<Input type="text" placeholder="Search music" />
			</div>
		</>
	);
};
