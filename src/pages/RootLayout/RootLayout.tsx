import { LoginModal } from "feature/LoginModal/LoginModal";
import { useSongContext } from "hooks/useSongContext";
import { Outlet } from "react-router";

export const RootLayout = () => {
	const { isModalShowed } = useSongContext();
	return (
		<>
			{isModalShowed && <LoginModal />}
			<Outlet />
		</>
	);
};
