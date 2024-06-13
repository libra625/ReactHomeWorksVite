import { useParams } from "react-router-dom";
import { getTodos } from "../../components/utilities/TodosGetSet/index.js";
import { Container } from "react-bootstrap";

const DATA_KEY = "ToDoListReactAndRoutes";

const SingleTodo = () => {
    const index = useParams().todoId;
    const todo = getTodos(DATA_KEY)[index];

    return (
        <Container className="todo-list d-flex shadow-lg card p-5 gap-2">
            <h2>Task: {todo.title}</h2>
            <p>Description: {todo.description}</p>
            <h4 style={{ color: todo.completed ? "green" : "red" }}>
        Completed? {todo.completed}
            </h4>
        </Container>
    );
};

export default SingleTodo;
