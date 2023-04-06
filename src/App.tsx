import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
	Navigate,
} from "react-router-dom";
import { LoginPage } from "pages";
import { SignupPage } from "pages";
import { HomePage } from "pages";
import { RootLayout } from "pages";
import { FavouritePage } from "pages";
import { MainContentPage } from "pages";
import { useAuthContext } from "hooks/useAuthContext";
import { ErrorPage } from "pages/ErrorPage";

function App() {
	const { user } = useAuthContext();
	const router = createBrowserRouter(
		createRoutesFromElements(
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
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
