import { useNavigate } from "react-router-dom";
import styles from "./styles/Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.cover}>
          <h1 className={styles.title}>Register your Account</h1>
        <form className={styles.form_register}>
          <input type="text" name="account" placeholder="Account" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button
            className={styles.signup_btn}
            onClick={() => navigate("/user")}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
