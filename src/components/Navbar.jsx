import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/addbook");
  };

  return (
    <div className={styles.navbar}>
      <Link className={styles["nav-logo"]} to="/">
        Library App!
      </Link>
      <SearchBar />
      <button onClick={(e) => handleCreate(e)}>Add Book</button>
      <div className={styles["nav-items"]}>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}
