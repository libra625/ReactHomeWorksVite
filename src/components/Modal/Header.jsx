import PropTypes from "prop-types";

const Header = (props) => {
    const handleClick = function () {
        props.toggle();
    };

    return (
        <div className="modal-header">
            <div className="modal-title">{props.children}</div>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClick}
            ></button>
        </div>
    );
};

export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired,
    toggle: PropTypes.func.isRequired,
};
