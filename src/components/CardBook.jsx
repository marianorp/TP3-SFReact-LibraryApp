import React from 'react'

const CardBook = ({ title, image, author }) => {

  return (
    <div>
        <h1>Title: {title}</h1>
        <img src={image} alt={title} loading={"lazy"} />
        <p>Author: {author}</p>
    </div>
  )
}

export default CardBook