import PropTypes from "prop-types";

const Title = ({ children }) => <h4 className="card-title">{children}</h4>;

Title.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Title;
