import { useNavigate } from "react-router-dom";
import styles from "./styles/Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <h1>Library App</h1>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}
