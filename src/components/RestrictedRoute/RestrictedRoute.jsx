import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function RestrictedRoute({
  component: Component,
  redirectTo = "/contacts",
}) {
  const isLoggedIn = useSelector(isUserLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
