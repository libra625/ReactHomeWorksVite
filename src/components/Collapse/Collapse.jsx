import React from "react";
import classNames from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened: this.props.opened };
    }

    isOpened = () => {
        this.setState({ opened: !this.state.opened });
    };

    render() {
        const isShown = classNames("collapse", this.state.opened ? "show" : null);

        const isExpanded = classNames(this.state.opened ? "true" : "false");

        const { text } = this.props;
        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isExpanded}
                        onClick={this.isOpened}
                    >
            Link with href
                    </a>
                </p>

                <div className={isShown}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}

Collapse.defaultProps = {
    text: "collapse me",
    opened: true,
};

export default Collapse;
