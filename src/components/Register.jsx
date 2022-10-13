import { useNavigate } from "react-router-dom";
import styles from "./styles/Register.module.css"

export default function Register(){
    const navigate = useNavigate();

    return (
        <div className={styles[`form-register`]}>
            
            <h1>Register your Account</h1>

            <label> Account :</label>
            <input type="name"  id="account"/>
           

            <label> Name :</label>
            <input type="name"  id="name"/>
           

            <label> Last Name :</label>
            <input type="name"  id="lastname"/>
          

            <label>Password :</label>
            <input type="password" id="password"/>
            

            <button className="form-button-2" onClick={() => navigate('/user')}>Sign up </button>
       </div>
    )
}