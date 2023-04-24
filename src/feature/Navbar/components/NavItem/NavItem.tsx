import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./NavItem.module.scss";

type NavItemProps = {
  children: string;
  icon: IconProp;
  destination: string;
  onClick: () => void;
};

export const NavItem = ({
  children,
  icon,
  destination,
  onClick,
}: NavItemProps) => {
  return (
    <li>
      <NavLink
        to={destination}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? styles["nav-item-active"]
            : styles["nav-item"]
        }
        onClick={onClick}
      >
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <p>{children}</p>
      </NavLink>
    </li>
  );
};
