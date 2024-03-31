import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginPage.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operation";
import { toast } from "react-hot-toast";
import { error, isloading } from "../../redux/auth/selectors";
import { Vortex } from "react-loader-spinner";
import ErrorMesage from "../../components/ErrorMesage/ErrorMesage";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(30, "To Long")
    .required("Required"),
});

export default function LoginPage() {
  const dispath = useDispatch();
  const Loading = useSelector(isloading);
  const isError = useSelector(error);
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          dispath(login(values))
            .unwrap()
            .then(() => {
              toast.success("Successfully Login");
            })
            .catch(() => {
              toast.error("Erro in login userr");
            });
        }}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field name="email" className={css.input} />
            <ErrorMessage name="email" component="span" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="span" />
          </label>
          <Button variant="contained" type="submit" className={css.button}>
            Login
          </Button>
        </Form>
      </Formik>
      {Loading && <Vortex />}
      {isError && <ErrorMesage />}
    </div>
  );
}
