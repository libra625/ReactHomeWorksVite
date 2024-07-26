import { useParams } from "react-router-dom";
import { getTodos } from "../../components/utilities/TodosGetSet/index.js";
import { useEffect, useState } from "react";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Nav from "../../components/Nav/index.js";
import LogOutButton from "../../components/LogOutButton/index.js";
import styles from "./SingleTodoView.module.scss";
import { Typography } from "@mui/material";

const SingleTodoView = () => {
    const { todoId } = useParams();
    const todos = getTodos();

    const [todoToView, setTodoToView] = useState({});

    useEffect(() => {
        const singleTodo = todos.find((todo) => todo.itemId === todoId) || {
            title: "",
            description: "",
            status: "Not-Completed",
        };

        if (singleTodo) {
            setTodoToView(singleTodo);
        }
    }, [todoId]);

    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav />
                <LogOutButton />
            </BaseTemplate.Header>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Typography variant="h5">{todoToView.title}</Typography>
                    <hr className={styles.separatorHor} />
                    <Typography variant="body1">{todoToView.description}</Typography>
                    <hr className={styles.separatorHor} />
                    <Typography variant="body1">{todoToView.status}</Typography>
                </div>
            </div>
        </BaseTemplate>
    );
};

export default SingleTodoView;
