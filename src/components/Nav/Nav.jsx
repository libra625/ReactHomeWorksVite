import { Link } from "react-router-dom";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import styles from "./nav.module.scss";

const Nav = () => {
    return (
        <BaseTemplate.Header>
            <nav className={styles.navigation}>
                <Link className={styles.link} to="/">
          HomePage
                </Link>
                <Link className={styles.link} to="/todos">
          Todos
                </Link>
            </nav>
        </BaseTemplate.Header>
    );
};

export default Nav;
