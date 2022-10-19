import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    
    return (
        <div className={styles.navbar}> 
            <Link className={styles['nav-logo']} to="/">Library App!</Link>    
            <div className={styles['nav-items']}>
                <Link to="/contact">Contact Us</Link>
            </div>    
        </div>
    )
}
