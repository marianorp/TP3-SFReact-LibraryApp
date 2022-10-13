import { useSelector } from "react-redux";
import CardBook from "./CardBook";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => {
          return (
            <CardBook
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.thumbnailUrl}
              author={book.authors}
            />
          );
        })}
    </div>
  );
};

export default BooksList;
