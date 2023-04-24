import { Route, Navigate } from "react-router-dom";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { SignupPage } from "pages/SignupPage/SignupPage";
import { HomePage } from "pages/HomePage/HomePage";
import { RootLayout } from "pages/RootLayout/RootLayout";
import { FavouritePage } from "pages/FavouritePage/FavouritePage";
import { MainContentPage } from "pages/MainContentPage/MainContentPage";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
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
