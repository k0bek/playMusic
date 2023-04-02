import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useSongContext } from "hooks/useSongContext";
import { tracks } from "data/tracks";
import styles from "./LoginModal.module.scss";

type ModalBackdropProps = {
	onClick?: () => void;
};

export function ModalBackdrop(props: ModalBackdropProps) {
	const { hideModal } = useSongContext();
	const backdropElement = document.getElementById("backdrop")!;

	return ReactDOM.createPortal(
		<div
			className={styles.backdrop}
			onClick={() => {
				hideModal();
				props.onClick?.();
			}}
		/>,
		backdropElement
	);
}

export function ModalOverlay() {
	const { hideModal, currentTrack } = useSongContext();
	const modalElement = document.getElementById("modal")!;

	return ReactDOM.createPortal(
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
		</div>,
		modalElement
	);
}

export const LoginModal = () => {
	return (
		<>
			<ModalBackdrop />
			<ModalOverlay />
		</>
	);
};
