import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Link to="/">
        <button className={styles.boton__back}>BACK</button>
      </Link>
      <div className={styles.cover}>
        <h1 className={styles.title}>Library App</h1>
        <form className={styles.form_login}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button
            className={styles.login_btn}
            onClick={() => navigate("/home")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
