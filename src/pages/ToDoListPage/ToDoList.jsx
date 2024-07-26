import { useEffect, useState } from "react";
import { getTodos } from "../../components/utilities/TodosGetSet/index.js";
import { cloneDeep, isEmpty } from "lodash";
import { Typography } from "@mui/material";
import styles from "./ToDoListPageStyles.module.scss";
import ToDoItem from "../../components/ToDoItem/index.js";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Nav from "../../components/Nav/index.js";
import LogOutButton from "../../components/LogOutButton/index.js";

const ToDoList = () => {
    const [todos, setTodos] = useState(getTodos() || []);

    useEffect(() => {
        const todosCopy = cloneDeep(todos);
        setTodos(todosCopy.reverse());
    }, []);

    const emptyTodos = () => {
        return (
            <Typography variant={"h1"} className={styles.title}>
        No ToDo
            </Typography>
        );
    };

    const presentTodos = () => {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {todos.map((todo) => (
                        <ToDoItem
                            description={todo.description}
                            title={todo.title}
                            key={todo.itemId}
                            id={todo.itemId}
                            visible={true}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav />
                <LogOutButton />
            </BaseTemplate.Header>

            {isEmpty(todos) ? emptyTodos() : presentTodos()}
        </BaseTemplate>
    );
};

export default ToDoList;
