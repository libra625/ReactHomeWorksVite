import { useState } from "react";
import { getTodos, setTodos } from "../utilities/TodosGetSet/index.js";
import { Button, Card, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const DATA_KEY = "ToDoListReactAndRoutes";

const ToDoItem = ({ title, description, id, deleteFunction }) => {
    const [isDone, setIsDone] = useState(false);

    const handleCheck = (event) => {
        const targetId = event.target.id;
        const notes = getTodos(DATA_KEY);

        const updatedNotes = notes.map((note) => {
            if (note.id === targetId) return { ...note, completed: !isDone };

            return note;
        });
        setTodos(DATA_KEY, updatedNotes);
        setIsDone(!isDone);
    };

    const handleDelete = (event) => {
        deleteFunction(event.target.id);
    };

    return (
        <Card
            className="mx-1 mb-5"
            style={{ width: "15rem", background: "lightgrey" }}
        >
            <Card.Title>{isDone ? <s>{title}</s> : title}</Card.Title>
            <Card.Body>{isDone ? <s>{description}</s> : description}</Card.Body>
            <hr />
            <Container className="d-flex justify-content-between gap-3">
                <input
                    type="checkbox"
                    className="form-check-input btn-check"
                    onClick={handleCheck}
                    id={id}
                />

                <label htmlFor={id} className="completed form-check">
          Completed
                </label>
                <Button className="btn-danger" onClick={handleDelete} id={id}>
          DELETE
                </Button>
            </Container>
        </Card>
    );
};

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteFunction: PropTypes.func.isRequired,
};

export default ToDoItem;
