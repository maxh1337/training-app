import React from "react";
import styles from "./Header.module.scss";

import userImage from "../../../images/header/user.svg";
import Hamburger from "./Hamburger/Hamburger";
import arrowImage from "../../../images/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()


  return (
    <header className={styles.header}>
      {location.pathname  !== '/' ? (
        <button type="button">
          <img src={arrowImage} alt="Auth" onClick={() => navigate(-1)}/>
        </button>
      ) : (
        <button type="button">
          <img src={userImage} alt="Auth" />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
