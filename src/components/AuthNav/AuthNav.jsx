import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={css.navItem}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navItem}>
        Login
      </NavLink>
    </div>
  );
}
