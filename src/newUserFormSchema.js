import * as Yup from 'yup';


const newUserFormSchema = Yup.object().shape({
    first_name: Yup
    .string()
    .required("First Name is Required"),

    last_name: Yup
    .string()
    .required("Last Name is required"),

    email: Yup
    .string()
    .email("Must be a valid email")
    .required("An Email is required"),

    password: Yup.string()
    .required(7, "Must be a valid password containing at least 7 characters"),
});

export default newUserFormSchema;