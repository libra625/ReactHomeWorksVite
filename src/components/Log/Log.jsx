import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class Log extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    };

    render() {
        const { id, value } = this.props;

        return (
            <Button
                type="button"
                variant="list-group-item list-group-item-action"
                onClick={this.handleDelete}
                id={id}
            >
                {value}
            </Button>
        );
    }
}

Log.propTypes = {
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default Log;
