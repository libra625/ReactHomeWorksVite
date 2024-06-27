import PropTypes from "prop-types";

const BaseTemplate = ({ classname = null, children }) => {
    return <main className={classname}>{children}</main>;
};

BaseTemplate.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.any.isRequired,
};

const Header = ({ classname, children }) => {
    return <header className={classname}>{children}</header>;
};

Header.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.any.isRequired,
};

BaseTemplate.Header = Header;

export default BaseTemplate;
