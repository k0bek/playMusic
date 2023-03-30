import { ButtonLoginLogut } from "components";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { tracks } from "data/tracks";

import styles from "./LoginModal.module.scss";
import { useSongContext } from "hooks/useSongContext";
import { ReactNode } from "react";

type ModalBackdropProps = {
	children: ReactNode;
};

function ModalBackdrop({ children }: ModalBackdropProps) {
	const { hideModal } = useSongContext();

	return (
		<div className={styles.backdrop} onClick={hideModal}>
			{children}
		</div>
	);
}

export function ModalOverlay() {
	const { hideModal, currentTrack } = useSongContext();

	return (
		<div className={styles["modal-overlay"]}>
			{currentTrack !== null && (
				<img src={tracks[currentTrack].picture} className={styles.image} />
			)}
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

type LoginModalProps = {
	children: ReactNode;
};

export const LoginModal = ({ children }: LoginModalProps) => {
	const backdropElement = document.getElementById("backdrop");
	const modalElement = document.getElementById("modal");

	return modalElement && backdropElement ? (
		<>
			{ReactDOM.createPortal(
				<ModalBackdrop>{children}</ModalBackdrop>,
				backdropElement
			)}
			{ReactDOM.createPortal(<ModalOverlay />, modalElement)}
		</>
	) : null;
};
