import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import uuid4 from "uuid4";
import { useFormik } from "formik";
import toDoFormValidationSchema from "./ToDoFormValidationSchema.js";
import styles from "./todoForm.module.scss";
import CustomInput from "../UI/CustomInput/index.js";
import { FormGroup } from "@mui/material";
import CustomButton from "../UI/CustomButton/index.js";

const formInitialValues = {
    title: "",
    description: "",
};

const ToDoForm = ({ handleCreate, handleDelete }) => {
    const [currentId, setCurrentId] = useState(uuid4());

    useEffect(() => {
        setCurrentId(uuid4());
    }, [handleCreate]);

    const formik = useFormik({
        initialValues: { ...formInitialValues },
        validationSchema: toDoFormValidationSchema,
        onSubmit: (values, { resetForm }) => {
            const newTodo = {
                title: values.title,
                description: values.description,
                itemId: currentId,
                status: "Not-Completed",
            };
            handleCreate(newTodo, "success");
            resetForm();
        },
    });

    const handleClearing = () => {
        formik.resetForm();
    };

    const handleDeleteAll = () => {
        handleDelete();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.wrapper}>
                <CustomInput
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    label="Title"
                    name="title"
                    id="title"
                    type="text"
                />

                <FormGroup>
                    <textarea
                        id={"description"}
                        name={"description"}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        placeholder={"type todo description"}
                        className={styles.textArea}
                    />
                </FormGroup>

                <div className={styles.buttonWrapper}>
                    <CustomButton
                        color="primary"
                        variant="outlined"
                        type="submit"
                        text="CREATE"
                    />

                    <CustomButton
                        color="secondary"
                        variant="outlined"
                        onClick={handleClearing}
                        text="Clear"
                    />

                    <CustomButton
                        color="error"
                        variant="outlined"
                        onClick={handleDeleteAll}
                        text="DELEAT ALL"
                    />
                </div>
            </div>
        </form>
    );
};

ToDoForm.propTypes = {
    handleCreate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ToDoForm;
