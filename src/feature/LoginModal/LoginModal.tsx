import { ButtonLoginLogut } from "components";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import img from "assets/images/anyway.jpg";

import styles from "./LoginModal.module.scss";
import { useSongContext } from "hooks/useSongContext";

function ModalBackdrop({ children }) {
	const { hideModal } = useSongContext();

	return (
		<div className={styles.backdrop} onClick={hideModal}>
			{children}
		</div>
	);
}

export function ModalOverlay() {
	const { hideModal } = useSongContext();

	return (
		<div className={styles["modal-overlay"]}>
			<img src={img} className={styles.image} />
			<div className={styles["modal-overlay-box"]}>
				<p className={styles.start}>
					Start listening with free playMusic account
				</p>
				<div className={styles.controls}>
					<Link to="/signup" className={styles.signup} onClick={hideModal}>
						Sign up
					</Link>
					<p className={styles.question}>
						Already have an account?{" "}
						<Link to="/login" className={styles.login} onClick={hideModal}>
							Log in
						</Link>
					</p>
				</div>
			</div>
			<button className={styles.close} onClick={hideModal}>
				Close
			</button>
		</div>
	);
}

export const LoginModal = ({ children }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalBackdrop />,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("modal")
			)}
		</>
	);
};
