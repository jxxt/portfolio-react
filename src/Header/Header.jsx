import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import lightIcon from "../assets/light.svg";

function Header() {
    const location = useLocation(); // Get the current path

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
                        <span
                            className={
                                location.pathname === "/projects"
                                    ? styles.noAnimation
                                    : styles.slowBlink
                            }
                        >
                            /
                        </span>
                        <span
                            className={
                                location.pathname === "/projects" ? styles.activeWord : ""
                            }
                        >
                            projects
                        </span>
                    </Link>
                </div>
                <div className={styles.blogs}>
                    <Link to="/blogs">
                        <span
                            className={
                                location.pathname === "/blogs"
                                    ? styles.noAnimation
                                    : styles.slowBlink
                            }
                        >
                            /
                        </span>
                        <span
                            className={
                                location.pathname === "/blogs" ? styles.activeWord : ""
                            }
                        >
                            blogs
                        </span>
                    </Link>
                </div>
                <div className={styles.techstack}>
                    <Link to="/techstack">
                        <span
                            className={
                                location.pathname === "/techstack"
                                    ? styles.noAnimation
                                    : styles.slowBlink
                            }
                        >
                            /
                        </span>
                        <span
                            className={
                                location.pathname === "/techstack" ? styles.activeWord : ""
                            }
                        >
                            techstack
                        </span>
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
