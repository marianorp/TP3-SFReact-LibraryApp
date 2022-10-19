import React from "react";
import Pagination from "@mui/material/Pagination";
import styles from "./styles/Paginado.module.css";

export default function Paginado({
  bookPerPage,
  allBooks,
  paginado,
  currentPage,
}) {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(allBooks / bookPerPage); i++) {
    pageNumber.push(i);
  }
  const handleChange = (event, value) => {
    paginado(value);
  };
  return (
    <div className={styles.paginado}>
      <Pagination
        count={pageNumber.length}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
}
