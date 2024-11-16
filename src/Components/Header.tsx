import { NavLink } from "react-router-dom";

import styles from "../../styles/blocks/_header.module.scss";
import utils from "../../styles/style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${utils.container}`}>
        <NavLink to="/" className={styles.header__logo}>
          THUNDER
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/nolan/64/lightning-bolt.png"
            alt="lightning-bolt"
          />
        </NavLink>
        <nav>
          <ul className={styles.header__menu_list}>
            <li className="header__menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/">News</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
