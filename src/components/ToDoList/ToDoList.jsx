import { useEffect, useState } from "react";
import { getTodos, setTodos } from "../utilities/TodosGetSet/index.js";
import { Container } from "react-bootstrap";
import ToDoItem from "../ToDoItem/index.js";
import { isEmpty } from "lodash";
import ToDoForm from "../ToDoForm/index.js";

const DATA_KEY = "ToDoListReactAndRoutes";

const ToDoList = () => {
    const [todosList, setTodosList] = useState([]);

    useEffect(() => {
        const todos = getTodos(DATA_KEY);

        if (!isEmpty(todos)) {
            setTodosList([...todos].reverse());
        }
    }, []);

    const handleDelete = (id) => () => {
        const oldTodos = getTodos(DATA_KEY);
        const filteredTodos = oldTodos.filter((todo) => todo.id !== id);

        setTodos(DATA_KEY, filteredTodos);
        setTodosList([...filteredTodos].reverse());
    };

    const handleDeleteAll = () => {
        localStorage.clear();
        setTodos(DATA_KEY, []);
        setTodosList([]);
    };

    const handleCreate = (newTodo) => {
        const oldTodos = getTodos(DATA_KEY);
        const updatedTodos = oldTodos ? [...oldTodos, newTodo] : [newTodo];
        setTodos(DATA_KEY, updatedTodos);
        setTodosList([...updatedTodos].reverse());
    };

    return (
        <Container className="d-flex">
            <Container className="w-50">
                <ToDoForm handleCreate={handleCreate} handleDelete={handleDeleteAll} />
            </Container>
            <Container className="d-flex flex-wrap col-8 justify-content-evenly">
                {todosList.map((todo, index) => (
                    <ToDoItem
                        key={index}
                        title={todo.title}
                        description={todo.description}
                        id={todo.id}
                        deleteFunction={handleDelete(todo.id)}
                    />
                ))}
            </Container>
        </Container>
    );
};

export default ToDoList;
