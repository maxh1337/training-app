import React from "react";
import styles from "./Header.module.scss";

import userImage from "../../../images/header/user.svg";
import authImage from "../../../images/header/dumbbell.svg";
import Hamburger from "./Hamburger/Hamburger";
import arrowImage from "../../../images/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <button type="button">
          <img
            src={arrowImage}
            alt="Auth"
            onClick={() => navigate(-1)}
            draggable={false}
            height="23"
            width="29"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => navigate(isAuth ? "/profile" : "/auth")}
        >
          <img
            src={isAuth === true ? authImage : userImage}
            alt="Auth"
            height="40"
            width="40"
          />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
