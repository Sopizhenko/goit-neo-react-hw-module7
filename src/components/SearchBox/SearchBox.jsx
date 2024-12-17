import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.contactsFilterWrapper}>
      <p className={css.filterLabel}>Find contacts by name</p>
      <input
        type="text"
        className={css.contactsFilter}
        placeholder="Search"
        value={value}
        onChange={(evt) => onSearch(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
