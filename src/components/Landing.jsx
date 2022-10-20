import { Link } from "react-router-dom";
import styles from "./styles/Landing.module.css";

const Landing=()=> {
  return (
    <>
      <div className={styles.container_home}>
          <h1 className={styles.title}>Library App</h1>
        <div className={styles.card}>
          <p className={styles.text_home}>
            Library App offers a wide range of book categories, such as: games, architecture, art, comics, business, software, 
            security, science, e-learning, poetry, music, etc. You can add, edit or delete your book collection.
          </p>
          <Link className={styles.buttons} to="home">
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
