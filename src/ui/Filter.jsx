import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilterValue = searchParams.get(filterField) ?? options[0].value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    // Reset the page when filter is changed
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.filterBtn} ${
            activeFilterValue === option.value ? styles.active : ""
          }`}
          onClick={() => handleClick(option.value)}
          disabled={activeFilterValue === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
