import { Outlet } from "react-router";
import { useSongContext } from "hooks/useSongContext";
import { LoginModal } from "feature/LoginModal/LoginModal";

export const RootLayout = () => {
  const { isModalShowed } = useSongContext();
  return (
    <>
      {isModalShowed && <LoginModal />}
      <Outlet />
    </>
  );
};
