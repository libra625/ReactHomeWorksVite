import * as Yup from "yup";

const ValidationSchema = Yup.object({
    title: Yup.string().trim().required("This field can`t be empty"),
    description: Yup.string().trim().required("This field can`t be empty"),
});

export default ValidationSchema;
