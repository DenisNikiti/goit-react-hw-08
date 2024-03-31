import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../../redux/auth/selectors";
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return isLoggedIn ? Component : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
};
