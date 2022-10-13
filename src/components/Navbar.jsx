import { Link } from "react-router-dom"
import styles from "./styles/Navbar.module.css"

export default function Navbar(){
    return (
        <div className={styles[`nav-bar`]}> 
         
            <div className={styles[`nav-links`]}>
                <Link to={"Home"}><img src="descarga.png" alt=""/></Link>
                <Link to={"books"}>Books</Link>
                <Link to={"Contact"}>Contact</Link>
                <Link to={"/"}>User</Link>
            </div>    
        </div>
    )
}
