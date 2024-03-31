import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./Registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operation";
import * as Yup from "yup";
import { error, isloading } from "../../redux/auth/selectors";
import { RotatingLines } from "react-loader-spinner";
import ErrorMesage from "../../components/ErrorMesage/ErrorMesage";
import toast from "react-hot-toast";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(30, "To Long")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(30, "To Long")
    .required("Required"),
});

export default function Registration() {
  const dispath = useDispatch();
  const Loading = useSelector(isloading);
  const isError = useSelector(error);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();

          dispath(register(values))
            .unwrap()
            .then(() => {
              toast.success("Successfully register");
            })
            .catch((error) => {
              toast.error("User doesnt register");
            });
        }}
      >
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" className={css.input} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" className={css.input} />
          <ErrorMessage name="email" component="span" />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            className={css.input}
          />
          <ErrorMessage name="password" component="span" />
          <Button size="medium" variant="outlined" type="submit">
            Register
          </Button>
        </Form>
      </Formik>
      {Loading && <RotatingLines strokeColor="blue" />}
      {isError && <ErrorMesage />}
    </div>
  );
}
