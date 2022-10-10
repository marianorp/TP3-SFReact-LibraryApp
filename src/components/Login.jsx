import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css"

export default function Login(){
    const navigate = useNavigate();

    return (

        <div className={styles[`form-login`]}>
            
            <h1>Login your Account</h1>
       
            
                {/* placeholder="Jhon Doe" no se si agregarlo*/ }

                <label>Account: </label>
                <input type="name"  id="account"/> 
              
                
                <label>Password: </label>
                <input type="password" id="password"/>
                
                <button className="form-button-2" onClick={() => navigate('/user')}>Sign in</button>
           
    
        
        </div>
    )
}