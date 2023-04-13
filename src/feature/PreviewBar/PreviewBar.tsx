import { Link } from "react-router-dom";
import { Button } from "components/Button/Button";
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
				<Button type="button" disabled={false} className="secondary-button">
					Sign up free
				</Button>
			</div>
		</Link>
	);
};
