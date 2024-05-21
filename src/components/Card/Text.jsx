import PropTypes from "prop-types";

const Text = (props) => <p className="card-text">{props.children}</p>;

Text.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Text;
