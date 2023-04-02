import styles from "./Welcome.module.scss";

type WelcomeProps = {
	text: string;
};

export const Welcome = ({ text }: WelcomeProps) => {
	return (
		<div>
			<h2 className={styles.heading}>
				Welcome to play<b className={styles.bolded}>M</b>usic
			</h2>
			<p>{text}</p>
		</div>
	);
};
