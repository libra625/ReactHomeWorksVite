import PropTypes from "prop-types";

const Body = (props) => <div className="card-body">{props.children}</div>;

Body.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Body;
