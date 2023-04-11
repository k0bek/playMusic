import { Route, Navigate } from "react-router-dom";
import { LoginPage } from "pages";
import { SignupPage } from "pages";
import { HomePage } from "pages";
import { RootLayout } from "pages";
import { FavouritePage } from "pages";
import { MainContentPage } from "pages";
import { ErrorPage } from "pages/ErrorPage";
import { useAuthContext } from "hooks/useAuthContext";

export const createRoutes = () => {
	const { user } = useAuthContext();
	return (
		<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route path="/" element={<MainContentPage />}>
				<Route path="/" element={<HomePage />} />
				<Route
					path="favourite"
					element={
						!user ? <Navigate replace to="/signup" /> : <FavouritePage />
					}
				/>
			</Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Route>
	);
};
