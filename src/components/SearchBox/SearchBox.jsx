import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/Slice";
import { useDispatch } from "react-redux";
import { filterSelector } from "../../redux/contacts/selectors";
export default function SearchBox() {
  const filter = useSelector(filterSelector);
  const dispath = useDispatch();
  return (
    <div className={css.formInput}>
      <label htmlFor="search">Find contac by name</label>
      <input
        value={filter}
        type="text"
        id="search"
        onChange={(e) => {
          dispath(changeFilter(e.target.value));
        }}
      ></input>
    </div>
  );
}
