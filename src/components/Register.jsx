import { useNavigate } from "react-router-dom";
import styles from "./styles/Register.module.css"

export default function Register(){
    const navigate = useNavigate();

    return (
        <div className={styles.page}> 
        <div className={styles.cover}>
            <div className={styles.title}><h1>Register your Account</h1></div>
            <input type="text" placeholder="ACCOUNT" />
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
            <div className={styles[`signup-btn`]} onClick={() => navigate('/user')}>Sign up</div>
        </div>
    </div>
    )
}