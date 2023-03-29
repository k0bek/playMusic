import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { SignupPage } from "pages/SignupPage";
import { HomePage } from "pages/HomePage";
import { RootLayout } from "pages/RootLayout/RootLayout";
import { MainContentPage } from "pages/MainContentPage/MainContentPage";
import { Favourite } from "pages/FavouritePage/Favourite";
import { useAuthContext } from "hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import { LoginModal } from "feature/LoginModal/LoginModal";

function App() {
	const { user } = useAuthContext();
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route path="/" element={<MainContentPage />}>
					<Route path="/" element={<HomePage />} />
					<Route
						path="favourite"
						element={!user ? <Navigate replace to="/signup" /> : <Favourite />}
					/>
				</Route>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
