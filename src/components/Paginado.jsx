import React from "react";
import Pagination from "@mui/material/Pagination";

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
    <div className="paginado">
      <Pagination
        count={pageNumber.length}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
}
