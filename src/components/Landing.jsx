import { Link } from "react-router-dom";
import styles from "./styles/Landing.module.css";

const Landing=()=> {
  return (
    <>
      <div className={styles.container_home}>
          <h1 className={styles.title}>Library App</h1>
        <div className={styles.card}>
          <p className={styles.text_home}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            omnis eos qui maiores architecto tempora veritatis sed ipsa veniam,
            provident mollitia nisi amet, excepturi quo atque quia error
            consequatur culpa
          </p>
          <Link className={styles.buttons} to="books">
            See library
          </Link>
          <Link className={styles.buttons} to="login">
            Login
          </Link>
          <Link className={styles.buttons} to="register">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing
