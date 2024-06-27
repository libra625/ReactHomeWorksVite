import { useEffect, useState } from "react";
import { idGenerator } from "../utilities/IdGenerator/index.js";
import { getTodos } from "../utilities/TodosGetSet/index.js";
import { isEmpty } from "lodash";
import { Button, Form, FormGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ToDoForm = ({ handleCreate, handleDelete }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [iteration, setIteration] = useState(idGenerator(0));
    // console.log(typeof iteration.next);

    useEffect(() => {
        const todos = getTodos();
        if (!isEmpty(todos)) {
            const currentID = todos.at(-1).id;
            setIteration(idGenerator(currentID));
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        name === "title" ? setTitle(value) : setDescription(value);
    };

    const handleClearing = () => {
        setTitle("");
        setDescription("");
    };

    const handleDeleteAll = (event) => {
        handleDelete();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim() === "" || description.trim() === "") return;
        console.log(iteration);
        const newId = iteration.next().value;
        const newTodo = {
            title,
            description,
            id: newId,
            completed: false,
        };

        handleCreate(newTodo);

        handleClearing();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                    name="title"
                />

                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Description"
                    style={{ height: "200px" }}
                    value={description}
                    onChange={handleChange}
                    name="description"
                />
                <div className="d-flex justify-content-lg-between flex-wrap p-1 gap-2">
                    <div className="d-flex gap-2 flex-grow-0">
                        <Button
                            className="btn btn-primary w-50"
                            type="submit"
                            name="submit_button"
                        >
              Create Task
                        </Button>

                        <Button className="btn btn-warning w-50" onClick={handleClearing}>
              Clear
                        </Button>

                        <Button className="btn btn-danger w-50" onClick={handleDeleteAll}>
              Delete all tasks
                        </Button>
                    </div>
                </div>
            </FormGroup>
        </Form>
    );
};

ToDoForm.propTypes = {
    handleCreate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ToDoForm;
