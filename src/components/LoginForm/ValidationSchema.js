import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    login: Yup.string()
        .min(3, "Must be at least 3 characters long")
        .trim()
        .matches(/@/, "missing @")
        .required("This field must be filled"),
    password: Yup.string()
        .min(6, "Must be at least 6 characters long")
        .trim()
        .required("This field must be filled"),
});

export default validationSchema;
