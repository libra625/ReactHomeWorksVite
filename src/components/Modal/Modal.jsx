import { Component } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class Modal extends Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    constructor(props) {
        super(props);
    }

    render() {
        const modalClass = classNames("modal", this.props.isOpen ? "fade" : "");

        const modalBlockStyle = classNames(this.props.isOpen ? "block" : "none");

        return (
            <div
                className={modalClass}
                style={{ display: modalBlockStyle }}
                role="dialog"
            >
                <div className="modal-dialog">
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
