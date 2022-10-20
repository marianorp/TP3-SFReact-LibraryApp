import { useSearchParams } from "react-router-dom";
import styles from "./styles/SearchBar.module.css"

const SearchBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";
  
    const handleFilter = (e) => {
      setSearchParams({ search: e.target.value })
    }

    return (
        <div className={styles[`container-search-book`]}>
        <input className={styles.input}
          type="text"
          id="search"
          placeholder="Search"
          onChange={handleFilter}
          value={search}
        />
      </div>
    )
}

export default SearchBar;
