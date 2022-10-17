import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./styles/Navbar.module.css"

export default function Navbar(){
    const navigate = useNavigate();
    
    return (
        <div className={styles.navbar}> 
            <span className={styles['nav-logo']} onClick={() => navigate('/')}>Library App!</span>    
            <SearchBar/>
            <div className={styles['nav-items']}>
                <h2 onClick={() => navigate('/contact')}>Contact Us</h2>
            </div>    
        </div>
    )
}
