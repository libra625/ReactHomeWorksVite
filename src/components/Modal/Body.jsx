import PropTypes from "prop-types";

const Body = (props) => <div className="modal-body">{props.children}</div>;

export default Body;

Body.propTypes = {
    children: PropTypes.any.isRequired,
};
