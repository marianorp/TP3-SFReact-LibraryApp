import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles/AddBook.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook, editBook } from "../features/books/booksSlices";
import Swal from "sweetalert2";
import regex from "../utils/regex";

const AddBook = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const booksLibrary = useSelector((state) => state.books);
  const [err, setErr] = useState({});
  const [book, setBook] = useState({
    id: "",
    title: "",
    authors: "",
    year: "",
    thumbnailUrl: "",
    description: "",
    isbn: "",
  });

  useEffect(() => {
    setErr(validate(book));
  }, [book]);

  useEffect(() => {
    if (params.id) {
      let { id, title, authors, year, thumbnailUrl, description, isbn } =
        booksLibrary.find((e) => e.id === params.id);
      const author = authors.toString();
      setBook({
        id,
        title,
        authors: author,
        year,
        thumbnailUrl,
        description,
        isbn,
      });
    }
  }, [params.id]);

  const validate = (book) => {
    let errors = {};
    if (!regex.empty.test(book.title)) {
      errors.title = "put a title!";
      return errors;
    } else if (!regex.empty.test(book.authors)) {
      errors.authors = "put a author!";
      return errors;
    } else if (!regex.img.test(book.thumbnailUrl)) {
      errors.thumbnailUrl = "enter a valid url!";
      return errors;
    }
    return false;
  };

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const submitBook = (id) => {
    Swal.fire({
      title: "Success!",
      text: `Book ${id ? "edit" : "added"} successfully!`,
      icon: "success",
      confirmButtonText: "Ok!",
    }).then(function () {
      navigate("/home");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!params.id) {
      dispatch(addBook(book));
      submitBook(false);
    } else {
      dispatch(editBook(book));
      submitBook(params.id);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.cover}>
        <h1 className={styles.title}>Add new Book</h1>
        <form className={styles.form_addbook} onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            type="text"
            onChange={handleChange}
            value={book.title}
            required
          />
          {err.title && <p>{err.title}</p>}
          <input
            name="authors"
            placeholder="Author"
            type="text"
            onChange={handleChange}
            value={book.authors}
            required
          />
          {err.authors && <p>{err.authors}</p>}
          <input
            name="year"
            placeholder="Year of publication"
            type="text"
            onChange={handleChange}
            value={book.year}
            required
          />
          <input
            name="thumbnailUrl"
            placeholder="Book Image"
            type="text"
            onChange={handleChange}
            value={book.thumbnailUrl}
            required
          />
          {err.thumbnailUrl && <p>{err.thumbnailUrl}</p>}
          <textarea
            name="description"
            placeholder="Description"
            type="text"
            onChange={handleChange}
            rows="7"
            value={book.description}
            required
          />
          <input
            name="isbn"
            placeholder="ISBN"
            type="text"
            onChange={handleChange}
            value={book.isbn}
            required
          />
          {err ? (
            <p>Complete the form</p>
          ) : (
            <input type="submit" value="Add" onClick={(e) => handleSubmit(e)} />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
