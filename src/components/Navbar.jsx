import styles from "./styles/Navbar.module.css"

export default function Navbar(){
    return (
        <div className={styles[`nav-bar`]}>
            
            <div className={styles[`nav-links`]}>
            <span>Insertar imagen</span>
            <li>Home</li>
            <li>Contact</li>
           
            </div>    
        </div>
       


    )
}
