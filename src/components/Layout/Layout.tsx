import React from "react";
import styles from "./Layout.module.scss";

interface ChildrenType {
  children: React.ReactNode;
}

export const Layout = ({ children }: ChildrenType) => {
  return <div className={styles.layout}>{children}</div>;
};
