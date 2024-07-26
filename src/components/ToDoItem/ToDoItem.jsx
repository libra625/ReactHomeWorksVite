import { useEffect, useState } from "react";
import { getTodos, setTodos } from "../utilities/TodosGetSet/index.js";
import PropTypes from "prop-types";
import { cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";
import styles from "./toDoItem.module.scss";
import { Typography } from "@mui/material";
import CustomSelect from "../UI/CustomSelect/index.js";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CustomButton from "../UI/CustomButton/index.js";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const ToDoItem = ({ title, description, id, deleteFunction, view }) => {
    const redirect = useNavigate();

    const todos = getTodos();
    const [currentTodos, setCurrentTodos] = useState(
        todos.find((todo) => todo.itemId.toString() === id.toString()) || {},
    );
    const [status, setStatus] = useState(currentTodos.status || "Not-Completed");

    useEffect(() => {
        const initialTodos = cloneDeep(currentTodos);
        setCurrentTodos(initialTodos);
    });

    const handleSelect = (event) => {
        const newStatus = event.target.value;
        const updatedTodos = getTodos().map((todo) =>
            todo.itemId.toString() === id.toString()
                ? {
                    ...todo,
                    status: newStatus,
                }
                : todo,
        );

        setTodos(updatedTodos);
        setStatus(newStatus);
    };

    const handleClick = () => {
        redirect(view ? `/todosView/${id}` : `/todos/${id}`, {});
    };

    const handleDelete = () => {
        deleteFunction();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h6">
                    <p className={styles.boldTitle}>{title}</p>
                </Typography>
                <hr className={styles.separator} />

                <Typography variant="body1">{description}</Typography>
                <hr className={styles.separator} />

                <CustomSelect
                    view={view}
                    status={status}
                    onSelect={handleSelect}
                    id={id.toString()}
                />

                <div className={styles.buttonContainer}>
                    <CustomButton
                        color={"secondary"}
                        variant={"contained"}
                        onClick={handleClick}
                        id={id.toString()}
                        icon={<RemoveRedEyeIcon />}
                    />

                    {deleteFunction && (
                        <CustomButton
                            color="error"
                            variant={"contained"}
                            onClick={handleDelete}
                            id={id.toString()}
                            icon={<DeleteForeverOutlinedIcon />}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    deleteFunction: PropTypes.func,
    view: PropTypes.bool,
};

export default ToDoItem;
