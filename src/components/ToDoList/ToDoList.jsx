import { useEffect, useState } from "react";
import {
    clearLocalStorage,
    getTodos,
    setTodos,
} from "../utilities/TodosGetSet/index.js";
import ToDoForm from "../ToDoForm/index.js";
import { Typography } from "@mui/material";
import { cloneDeep } from "lodash";
import styles from "./todolist.module.scss";
import ToDoItem from "../ToDoItem/index.js";

const ToDoList = () => {
    const todos = getTodos();

    const [todosList, setTodosList] = useState(todos ? [...todos].reverse() : []);

    useEffect(() => {
        if (todos) {
            const todosCopy = cloneDeep(todos);
            setTodosList([...todosCopy].reverse());
        }
    }, []);

    const handleDelete = (id) => () => {
        const oldTodos = getTodos();
        const filteredTodos = oldTodos.filter((todo) => todo.itemId !== id);

        setTodos(filteredTodos);
        setTodosList([...filteredTodos].reverse());
    };

    const handleDeleteAll = () => {
        clearLocalStorage();
        setTodosList([]);
    };

    const handleCreate = (newTodo) => {
        const oldTodos = getTodos() || [];
        const updatedTodos = [...oldTodos, newTodo];
        setTodos(updatedTodos);
        setTodosList([...updatedTodos].reverse());
    };

    return (
        <div className={styles.list}>
            <Typography variant={"h5"} align={"center"}>
                <b>Create a new todo</b>
            </Typography>

            <div className={styles.container}>
                <ToDoForm handleCreate={handleCreate} handleDelete={handleDeleteAll} />

                <div className={styles.wrapper}>
                    {todosList.map((todo) => (
                        <ToDoItem
                            deleteFunction={handleDelete(todo.itemId)}
                            description={todo.description}
                            id={todo.itemId}
                            title={todo.title}
                            key={todo.itemId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
