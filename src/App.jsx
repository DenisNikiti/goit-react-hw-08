import Layout from "./components/Layout/Layout";
import { Route, Routes, redirect } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

import { Refreshing } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Registration = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage "));
const ContactPage = lazy(() => import("./pages/ContactsPage/ContactPage"));
const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
function App() {
  const isRefreshing = useSelector(Refreshing);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);
  return isRefreshing ? (
    <p>Refres page...</p>
  ) : (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<ContactPage />} redirectTo="/login" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Registration />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;
