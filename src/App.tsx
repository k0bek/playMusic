import { createRoutes } from "./routes";
import { createRoutesFromElements } from "react-router";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

function App() {
	const router = createBrowserRouter(createRoutesFromElements(createRoutes()));
	return <RouterProvider router={router} />;
}

export default App;
