import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import lightIcon from "../assets/light.svg";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <Link to="/">
                    jxxt<span className={styles.blink}>_</span>
                </Link>
            </div>

            <div className={styles.navbar}>
                <div className={styles.projects}>
                    <Link to="/projects">
                        <span className={styles.slowBlink}>/</span>projects
                    </Link>
                </div>
                <div className={styles.blogs}>
                    <Link to="/blogs">
                        <span className={styles.slowBlink}>/</span>blogs
                    </Link>
                </div>
                <div className={styles.techstack}>
                    <Link to="/techstack">
                        <span className={styles.slowBlink}>/</span>techstack
                    </Link>
                </div>
            </div>

            <div className={styles.themeBtn}>
                <img src={lightIcon} alt="" height="22px" />
            </div>
        </div>
    );
}

export default Header;
