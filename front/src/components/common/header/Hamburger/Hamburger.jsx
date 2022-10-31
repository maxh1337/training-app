import React from "react";
import styles from "./Hamburger.module.scss";
import hamburgerImage from "../../../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../../../images/header/hamburger-close.svg";
import { Link } from "react-router-dom";
import { menu } from "./menuBase";

const Hamburger = () => {
  const [show, setShow] = React.useState(false);

  const HandleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => setShow(!show)}>
        <img
          src={show ? hamburgerCloseImage : hamburgerImage}
          alt="Menu"
          height="24px"
        />
      </button>
      <nav className={`${styles.menu} ${show ? styles.show : ""}`}>
        <ul>
          {menu.map((item, idx) => (
            <li key={`_menu_${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button onClick={HandleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
