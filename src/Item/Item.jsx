import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Item = ({ task, onRemove, id }) => {
    const handleDelete = (event) => {
        onRemove(event.target.id);
    };
    return (
        <>
            <div className="row">
                <div className="col-auto">
                    <Button
                        type="button"
                        variant="primary"
                        className="btn-sm"
                        id={id}
                        onClick={handleDelete}
                    >
            -
                    </Button>
                </div>
                <div className="col">{task}</div>
            </div>
            <hr />
        </>
    );
};

Item.propTypes = {
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
};

export default Item;
