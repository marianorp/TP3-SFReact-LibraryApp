import styles from "./styles/Home.module.css";
import { useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import CardBook from "./CardBook";

const Home = () => {
  const books = useSelector((state) => state.books);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const handleFilter = (e) => {
    setSearchParams({ search: e.target.value });
  };
  return (
    <div className={styles.container_home}>
      <div className="container-search-book">
        <label htmlFor="search">Search book</label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={handleFilter}
          value={search}
        />
      </div>
      <div className={styles.container_cards}>
        {books
          .filter((book) => {
            if (!search) return true;

            const title = book.title.toLowerCase();
            return title.includes(search.toLowerCase());
          })
          .map((book) => {
            return (
              <Link to={"/home/" + book.id} key={book.id}>
              <CardBook
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.thumbnailUrl}
                author={book.authors}
              /></Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
