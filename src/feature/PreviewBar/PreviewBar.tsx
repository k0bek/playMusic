import { Link } from "react-router-dom";
import { SecondaryButton } from "components/SecondaryButton/SecondaryButton";
import styles from "./PreviewBar.module.scss";

export const PreviewBar = () => {
	return (
		<Link to="/signup">
			<div className={styles["preview-bar"]}>
				<div className={styles["text-box"]}>
					<p className={styles["title"]}>Preview of playMusic</p>
					<p className={styles["desc"]}>
						Sign up up get unlimited songs. No credit card needed.
					</p>
				</div>
				<SecondaryButton>Sign up free </SecondaryButton>
			</div>
		</Link>
	);
};
