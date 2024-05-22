import PropTypes from "prop-types";

const Footer = (props) => <div className="modal-footer">{props.children}</div>;

export default Footer;

Footer.propTypes = {
    children: PropTypes.any.isRequired,
};
