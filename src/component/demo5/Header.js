import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import styles from "./Header.module.css";

const Header = () => {
  const autCtx = useContext(AuthContext);

  const logoutHandler = () => {
    autCtx.onLogout();
  };

  return (
    <header className={styles.header}>
      <h2>PNC Bank</h2>

      <nav>
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>

          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
