import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/AddBook.module.css";

const BooksForm = () =>{    

    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        publicationDate: "",
        bookImage: "",
        description: "",
        isbn: ""
    });

    const handleChange = (event) => {
        setBook({
            ...book, 
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
    
    <div className={styles.page}> 
      {/* <div className={styles.side}>
       
        aca iria la barra add book, user, lista
      </div> */}
      <div className={styles.cover}>
        <div className={styles.title}><h1>Add new Book</h1></div>
        <form onSubmit={handleSubmit}>
            <input 
                name="title" 
                placeholder="Title" 
                type="text" 
                onChange={handleChange} 
            />

            <input 
                name="author" 
                placeholder="Author" 
                type="text" 
                onChange={handleChange}
            />  

            <input 
                name="publicationDate" 
                placeholder="Year of publication" 
                type="text" 
                onChange={handleChange}
            /> 

            <input name="bookImage" 
                placeholder="Book Image" 
                type="text" 
                onChange={handleChange} 
            />

            <textarea 
                name="description" 
                placeholder="Description" 
                type="text" 
                onChange={handleChange}
            />

            <input 
                name="isbn" 
                placeholder="ISBN" 
                type="text" 
                onChange={handleChange} 
            />
            </form>
            {/* <div className={styles[`addbook-btn`]} onClick={() => navigate('/user')}>Add</div> */}
            <button type="submit" onClick={() => navigate('/user')}>Add</button>
        </div>
    </div>

    )
}

export default BooksForm;