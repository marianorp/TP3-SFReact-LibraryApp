import { useNavigate } from "react-router-dom";
import styles from "./styles/Register.module.css"

export default function Register(){
    const navigate = useNavigate();

    return (
        <div className={styles.page}> 
        <div className={styles.cover}>
            <div className={styles.title}><h1>Register your Account</h1></div>
            <input type="text" placeholder="Account" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className={styles[`signup-btn`]} onClick={() => navigate('/user')}>Sign up</div>
        </div>
    </div>
    )
}