import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { isUserLoggedIn } from "../../redux/auth/selectors";
import Usermenu from "../UserMenu/Usermenu";

function AppBar() {
  const isLoging = useSelector(isUserLoggedIn);
  return (
    <nav className={css.nav}>
      <Navigation />

      {isLoging ? <Usermenu /> : <AuthNav />}
    </nav>
  );
}

export default AppBar;
