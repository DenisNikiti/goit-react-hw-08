import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../../redux/auth/selectors";
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/login",
}) {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
