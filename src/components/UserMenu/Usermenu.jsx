import { useDispatch, useSelector } from "react-redux";
import css from "./Usermenu.module.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { User, isloading } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
import { logout } from "../../redux/auth/operation";
import { CirclesWithBar } from "react-loader-spinner";

export default function Usermenu() {
  const UserName = useSelector(User);
  const loading = useSelector(isloading);
  const dispath = useDispatch();

  return (
    <div className={css.container}>
      <AccountCircleSharpIcon className={css.item} />
      <p className={css.item}>Welcowe User {UserName}</p>
      <Button
        size="medium"
        variant="outlined"
        className={css.item}
        onClick={() => {
          dispath(logout());
        }}
      >
        LogOut
      </Button>
      {loading && <CirclesWithBar color="blue" />}
    </div>
  );
}
