import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CardBook from "./CardBook";


const BooksList = () => {

  const books = useSelector((state) => state.books);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  return (
    <div>
      
      {books
        .filter((book) => {
          if (!search) return true;

          const title = book.title.toLowerCase();
          return title.includes(search.toLowerCase());
        })
        .map((book) => {
          return (
            <CardBook
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.thumbnailUrl}
              author={book.authors}
            />
          )
        })}
    </div>
  )
}

export default BooksList;
