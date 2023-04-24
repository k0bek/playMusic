import { Link } from "react-router-dom";
import { useAuthContext } from "hooks/useAuthContext";
import styles from "./LoginLogoutPanel.module.scss";
import { useLogout } from "hooks/useLogout";
import { useSongContext } from "hooks/useSongContext";
import { Button } from "components/Button/Button";

export const LoginLogutPanel = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { handleIsPlaying, handleSongId } = useSongContext();

  const handleLoginAndLogout = () => {
    if (user) {
      logout();
    }

    handleIsPlaying(false);
    handleSongId(null);
  };
  return (
    <div className={styles.panel}>
      <div className={styles["panel-box"]}>
        {!user && (
          <Link to={!user ? "signup" : "/"} className={styles.signup}>
            Signup
          </Link>
        )}
        <Link to={!user ? "login" : "/"} onClick={handleLoginAndLogout}>
          <Button type="button" disabled={false} className="secondary-button">
            {user ? "Logout" : "Login"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
