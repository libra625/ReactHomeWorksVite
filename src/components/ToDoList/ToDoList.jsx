import { useEffect, useState } from "react";
import { getTodos, setTodos } from "../utilities/TodosGetSet/index.js";
import ToDoItem from "../ToDoItem/index.js";
import { isEmpty } from "lodash";
import ToDoForm from "../ToDoForm/index.js";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const ToDoList = () => {
    const [todosList, setTodosList] = useState([]);

    useEffect(() => {
        const todos = getTodos();

        if (!isEmpty(todos)) {
            setTodosList([...todos].reverse());
        }
    }, []);

    const handleDelete = (id) => () => {
        const oldTodos = getTodos();
        const filteredTodos = oldTodos.filter((todo) => todo.id !== id);

        setTodos(filteredTodos);
        setTodosList([...filteredTodos].reverse());
    };

    const handleDeleteAll = () => {
        localStorage.clear();
        setTodos([]);
        setTodosList([]);
    };

    const handleCreate = (newTodo) => {
        const oldTodos = getTodos();
        const updatedTodos = oldTodos ? [...oldTodos, newTodo] : [newTodo];
        setTodos(updatedTodos);
        setTodosList([...updatedTodos].reverse());
    };

    return (
        <Container disableGutters={true} maxWidth="xxl">
            <Grid2 container spacing={2}>
                <Grid2 lg={4}>
                    <ToDoForm
                        handleCreate={handleCreate}
                        handleDelete={handleDeleteAll}
                    />
                </Grid2>
                <Grid2 xs={8}>
                    {todosList.map((todo, index) => (
                        <ToDoItem
                            key={index}
                            title={todo.title}
                            description={todo.description}
                            id={todo.id}
                            deleteFunction={handleDelete(todo.id)}
                        />
                    ))}
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default ToDoList;
