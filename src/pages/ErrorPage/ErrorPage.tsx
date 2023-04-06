import { Layout } from "components";
import { useAuthContext } from "hooks/useAuthContext";
import { MainContentPage } from "pages/MainContentPage";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
	const user = useAuthContext();
	return (
		<Layout>
			<div className={styles["error-page"]}>
				<p className={styles.whoops}>Whoops!</p>
				<p className={styles["not-found"]}>404 Page Not Found</p>
				<iframe
					src="https://giphy.com/embed/TFYyfFrqxuExEM5r04"
					width="480"
					height="268"
					frameBorder="0"
					allowFullScreen
				></iframe>

				<p className={styles.vacation}>
					Looks like this page went on vacation.
				</p>
				<p>
					Try out{" "}
					<Link to="/" className={styles.link}>
						homepage
					</Link>{" "}
					instead.
				</p>
			</div>
		</Layout>
	);
};
