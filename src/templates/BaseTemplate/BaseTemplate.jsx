import PropTypes from "prop-types";
import styles from "./BaseTemplateHeader.module.scss";

const BaseTemplate = ({ classname = null, children }) => {
    return <main className={classname}>{children}</main>;
};

BaseTemplate.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.any.isRequired,
};

const Header = ({ children }) => {
    return <header className={styles.header}>{children}</header>;
};

Header.propTypes = {
    children: PropTypes.any.isRequired,
};

BaseTemplate.Header = Header;

export default BaseTemplate;
