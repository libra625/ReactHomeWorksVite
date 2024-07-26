import { useNavigate, useParams } from "react-router-dom";
import { getTodos, setTodos } from "../../components/utilities/TodosGetSet";
import BaseTemplate from "../../templates/BaseTemplate";
import routeNames from "../../router/routeNames.js";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import { useFormik } from "formik";
import ValidationSchema from "./ValidationSchema.js";
import Nav from "../../components/Nav/index.js";
import LogOutButton from "../../components/LogOutButton/index.js";
import styles from "./SingleTodoEdit.module.scss";
import { Typography } from "@mui/material";
import CustomButton from "../../components/UI/CustomButton/index.js";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomInput from "../../components/UI/CustomInput/index.js";
import CustomSelect from "../../components/UI/CustomSelect/index.js";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded.js";

const SingleTodoEdit = () => {
    const redirection = useNavigate();
    const { homePage: homePage } = routeNames;

    const { todoId } = useParams();
    const todos = getTodos();

    const [todoToEdit, setTodoToEdit] = useState(
        todos.find((todo) => todo.itemId.toString() === todoId) || {
            title: "",
            description: "",
            status: "Not-Completed",
        },
    );

    const [status, setStatus] = useState(todoToEdit.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (todoToEdit) {
            const copy = cloneDeep(todoToEdit);
            setTodoToEdit(copy);
        }
    }, [todoId]);

    const initialFormValues = {
        title: todoToEdit.title || "",
        description: todoToEdit.description || "",
    };

    const formik = useFormik({
        initialValues: { ...initialFormValues },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            const updatedTodos = todos.map((todo) => {
                if (todo.itemId.toString() === todoId) {
                    return {
                        ...todo,
                        title: values.title,
                        description: values.description,
                    };
                }
                return todo;
            });
            setTodos(updatedTodos);
            setTodoToEdit((prevTodo) => ({
                ...prevTodo,
                title: values.title,
                description: values.description,
            }));
            stopEditMode();
        },
    });

    const stopEditMode = () => {
        setEditMode(false);
    };

    const handleSelect = (event) => {
        const newStatus = event.target.value;

        const updatedTodos = todos.map((todo) => {
            if (todo.itemId.toString() === todoId) {
                return { ...todo, status: newStatus };
            }

            return todo;
        });
        setTodos(updatedTodos);
        setStatus(newStatus);
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleAbort = () => {
        handleEdit();
        formik.resetForm();
    };

    const handleDelete = () => () => {
        const filtredTodos = todos.filter(
            (todo) => todo.itemId.toString() !== todoId,
        );
        console.log("delete");
        setTodos(filtredTodos);
        redirection(homePage);
    };

    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav />
                <LogOutButton />
            </BaseTemplate.Header>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {editMode ? (
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <Typography variant={"h5"}>ToDos Title: </Typography>
                            <CustomInput
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                name={"title"}
                                id="title"
                                type="text"
                            />

                            <Typography variant={"h5"}>ToDos Description: </Typography>
                            <textarea
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                name={"description"}
                                id="description"
                                placeholder="TODO's description"
                                className={styles.title}
                            />

                            <hr className={styles.separatorHor} />
                            <CustomSelect
                                onSelect={handleSelect}
                                status={status}
                                id={todoId.toString()}
                            />

                            <hr className={styles.separatorHor} />
                            <div className={styles.buttonGroup}>
                                <CustomButton
                                    color={"success"}
                                    variant={"contained"}
                                    type={"submit"}
                                    icon={<DoneOutlineIcon />}
                                />
                                <CustomButton
                                    color={"error"}
                                    variant={"contained"}
                                    onClick={handleAbort}
                                    icon={<UndoRoundedIcon />}
                                />
                            </div>
                        </form>
                    ) : (
                        <>
                            <Typography variant={"h5"} className={styles.description}>
                                <b>Title: </b> {todoToEdit.title}
                            </Typography>
                            <hr className={styles.separatorHor} />

                            <Typography variant={"h5"} className={styles.description}>
                                <b>Description: </b> {todoToEdit.description}
                            </Typography>
                            <hr className={styles.separatorHor} />

                            <Typography variant={"h5"} className={styles.description}>
                                <b>Status: </b> {status}
                            </Typography>

                            {/*<CustomSelect*/}
                            {/*    onSelect={handleSelect}*/}
                            {/*    status={status}*/}
                            {/*    id={todoId.toString()}*/}
                            {/*    view={true}*/}
                            {/*/>*/}
                            <div className={styles.buttonGroup}>
                                <CustomButton
                                    color={"secondary"}
                                    variant={"contained"}
                                    onClick={handleEdit}
                                    icon={<EditIcon />}
                                />
                                <CustomButton
                                    color={"error"}
                                    variant={"contained"}
                                    onClick={handleDelete()}
                                    icon={<DeleteIcon />}
                                />
                            </div>
                        </>
                    )}
                </div>
                {/*<p>Here</p>*/}
            </div>
        </BaseTemplate>
    );
};

export default SingleTodoEdit;
