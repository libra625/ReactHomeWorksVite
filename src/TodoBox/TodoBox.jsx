import { Button, Form } from "react-bootstrap";
import Item from "../Item/index.js";
import { useState } from "react";

const TodoBox = () => {
    const [taskValue, setTaskValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleDelete = (indexToDelete) => () => {
        const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
        setTasks(updatedTasks);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskValue.trim()) return;

        setTasks([taskValue, ...tasks]);
        setTaskValue("");
    };

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    };

    return (
        <>
            <div className="mb-3">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Form.Control
                            type="text"
                            value={taskValue}
                            placeholder="I am going..."
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <Button variant="primary" type="submit">
            Add
                    </Button>
                </Form>
            </div>
            {tasks.map((note, index) => (
                <Item
                    key={index}
                    task={note.toString()}
                    id={index}
                    onRemove={handleDelete(index)}
                />
            ))}
        </>
    );
};

export default TodoBox;
