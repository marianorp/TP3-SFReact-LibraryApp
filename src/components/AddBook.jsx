import { useNavigate } from "react-router-dom";
import styles from "./styles/AddBook.module.css";

    
export default function AddBook(){
    const navigate = useNavigate();

    return (
    

    <div className={styles[`form-book`]}>
        <form >
           
            <label> Title: </label>
            <input name="title" type="text"/>

            <label> Author: </label>
            <input name="author" type="text"/>
    
            <label> Year of publication: </label>
            <input name="publicationDate" type="text"/>

            <label> Book Image: </label>
            <input name="bookImage" type="text"/>

            <label> Description: </label>
            <textarea name="description" type="text"/>

            <label> ISBN: </label>
            <input name="isbn" type="text"/>

            <button onClick={() => navigate('/user')}>Add Book</button>

        </form>
    </div>

    )
}
