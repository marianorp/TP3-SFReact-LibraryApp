import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css"

export default function Login(){
    const navigate = useNavigate();

    return (

        <div className={styles.page}> 
            <div className={styles.cover}>
                <div className={styles.title}><h1>Library App</h1></div>
                <div className={styles.box}>
                    <input type="text" placeholder="USERNAME" />
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <div className={styles[`login-btn`]} onClick={() => navigate('/user')}>Login</div>
            </div>
        </div>
    )
}