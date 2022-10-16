import React from "react";
import styles from "./styles/Detaill.module.css";

const Detaill = ({
  titulo = "Unlocking Android",
  img = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
  description = "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
  author = ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
  isbn = 15311,
  year = 1999,
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src={img} alt="" />
        <div className={styles.text}>
          <h2>{titulo}</h2>
          <h3 className={styles.caption}>Description: </h3>
          <p>{description}</p>
          <div className={styles.information}>
            <h3 className={styles.caption}>Information</h3>
            <p><strong>authors:</strong> {author && author.map((a) => a)}</p>
            <p><strong>ISBN:</strong>{isbn}</p>
            <p><strong>year of publication:</strong>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detaill;
