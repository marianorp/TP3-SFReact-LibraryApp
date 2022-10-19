import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles/Detaill.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteBook } from "../features/books/booksSlices";

const Detaill = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const booksLibrary = useSelector((state) => state.books);
  const [book, setBook] = useState();
  useEffect(() => {
    setBook(booksLibrary.find((e) => e.id === params.id));
  }, [params.id]);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBook(params.id));
    Swal.fire({
      title: "Success!",
      text: "Deleted Book!",
      icon: "success",
      confirmButtonText: "Ok!",
    }).then(function () {
      navigate("/home");
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    navigate(`/addbook/${params.id}`);
  };
  return (
    <div className={styles.box}>
      {book ? (
        <div className={styles.container}>
          <img src={book.thumbnailUrl} alt="" />
          <div className={styles.text}>
            <h2>{book.title}</h2>
            <h3 className={styles.caption}>Description: </h3>
            <p>{book.description}</p>
            <div className={styles.information}>
              <h3 className={styles.caption}>Information</h3>
              <p>
                <strong>authors:</strong>{" "}
                {book.authors && book.authors.toString()}
              </p>
              <p>
                <strong>ISBN:</strong>
                {book.isbn}
              </p>
              <p>
                <strong>year of publication:</strong>
                {book.year}
              </p>
            </div>
            <div className={styles.button}>
              <button onClick={(e) => handleUpdate(e)}>Update</button>
              <button onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Detaill;
