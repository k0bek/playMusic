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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
