import styles from "./styles/Home.module.css";
import { useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import CardBook from "./CardBook";
import Paginado from "./Paginado";
import { useState } from "react";

const Home = () => {
  const books = useSelector((state) => state.books);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(9);
  const lastPositionBook = currentPage * bookPerPage;
  const indexFirstPositionBook = lastPositionBook - bookPerPage;
  const currentBook = books.slice(indexFirstPositionBook, lastPositionBook);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = (e) => {
    setSearchParams({ search: e.target.value });
  };
  console.log(books.length);
  return (
    <div className={styles.container_home}>
      <div className={styles.container_cards}>
        {currentBook
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
                />
              </Link>
            );
          })}
      </div>
      <div className="paginado">
        <Paginado
          bookPerPage={bookPerPage}
          allBooks={books.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
