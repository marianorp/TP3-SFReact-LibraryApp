import styles from "./styles/Navbar.module.css"

export default function Navbar(){
    return (
        <div className={styles[`nav-bar`]}>
            
            <div className={styles[`nav-links`]}>
            
                <li><a href="/">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/User">User</a></li>
            </div>    
        </div>
       


    )
}
