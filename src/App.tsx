import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { useAuthContext } from "./hooks/useAuthContext";

const router = createBrowserRouter([
	{ index: true, element: <HomePage /> },
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
]);

function App() {
	const { user } = useAuthContext();
	console.log(user);
	return <RouterProvider router={router} />;
}

export default App;
