import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ value, onSearch }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.contactsFilterWrapper}>
      <p className={css.filterLabel}>Find contacts by name</p>
      <input
        type="text"
        className={css.contactsFilter}
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
