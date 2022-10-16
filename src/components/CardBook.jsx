import React from "react";
import styles from "./styles/CardBook.module.css";

const CardBook = ({
  title = "Unlocking Android",
  image = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
  author = ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={image}
          alt={title}
          loading={"lazy"}
          className={styles.front}
        />
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>Author: {author[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
