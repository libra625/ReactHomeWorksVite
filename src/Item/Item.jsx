import { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Item extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (event) => {
        this.props.onRemove(event.target.id);
    };

    render() {
        const { id, task } = this.props;

        return (
            <>
                <div className="row">
                    <div className="col-auto">
                        <Button
                            type="button"
                            variant="primary"
                            className="btn-sm"
                            id={id}
                            onClick={this.handleDelete}
                        >
              -
                        </Button>
                    </div>
                    <div className="col">{task}</div>
                </div>
                <hr />
            </>
        );
    }
}

Item.propTypes = {
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
};

export default Item;
