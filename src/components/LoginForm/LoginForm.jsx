import routeNames from "../../router/routeNames.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./loginForm.module.scss";
import { useFormik } from "formik";
import validationSchema from "./ValidationSchema.js";
import Cookies from "js-cookie";
import { Fab, Typography } from "@mui/material";
import CustomInput from "../UI/CustomInput/index.js";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CustomButton from "../UI/CustomButton/index.js";

const formInitialValues = {
    login: "",
    password: "",
};

const LoginForm = () => {
    const { homePage: homePage } = routeNames;

    const redirect = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: { ...formInitialValues },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("dsadsasda");
            Cookies.set("loggedin", "true");
            resetForm();
            redirect(homePage);
        },
    });

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <Typography variant={"h3"} align={"center"}>
          Sign In
                </Typography>

                <div className={styles.wrapper}>
                    <CustomInput
                        onChange={formik.handleChange}
                        name={"login"}
                        type={"text"}
                        value={formik.values.login.trim()}
                        touched={formik.touched.login}
                        error={formik.errors.login}
                        label={"Login"}
                        id={"login"}
                    />

                    <CustomInput
                        onChange={formik.handleChange}
                        name={"password"}
                        type={showPassword ? "password" : "text"}
                        value={formik.values.password.trim()}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={"password"}
                        id={"password"}
                    />

                    <div className={styles.display}>
                        <Fab
                            onClick={handleClick}
                            size={"small"}
                            variant={"outlined"}
                            color={"secondary"}
                        >
                            {showPassword ? <LockIcon /> : <LockOpenIcon />}
                        </Fab>
                    </div>
                    <CustomButton
                        color={"primary"}
                        variant={"contained"}
                        text={"Log In"}
                        type={"submit"}
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
