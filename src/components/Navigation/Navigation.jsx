import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { isUserLoggedIn } from "../../redux/auth/selectors";

function Navigation() {
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <div>
      <NavLink to="/" className={css.navItem}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navItem}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
