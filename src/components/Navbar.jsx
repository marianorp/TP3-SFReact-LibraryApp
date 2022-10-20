import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import {BsFillPersonCheckFill} from "react-icons/bs"
import {FaBookMedical, FaHome} from "react-icons/fa"

export default function Navbar() {
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/addbook");
  };

  return (
    <div className={styles.navbar}>
      <Link className={styles["nav-logo"]} to="/">
      <FaHome/>
      </Link>
      <SearchBar />
      <button className={styles.addButton} onClick={(e) => handleCreate(e)}><FaBookMedical/></button>
      <div className={styles["nav-items"]}>
        <Link to="/contact"><BsFillPersonCheckFill/></Link>
      </div>
    </div>
  );
}
