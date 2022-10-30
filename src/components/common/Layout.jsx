import React from "react";
import Header from "./header/header";
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
