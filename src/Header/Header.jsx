import styles from "./Header.module.css";
import lightIcon from "../assets/light.svg"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <a href="https://jxxt.github.io/">
                    jxxt<span className={styles.blink}>_</span>
                </a>
            </div>

            <div className={styles.navbar}>
                <div className={styles.projects}>
                    <a href="https://jxxt.github.io/projects">
                        <span className={styles.slowBlink}>/</span>projects
                    </a>
                </div>
                <div className={styles.blogs}>
                    <a href="https://jxxt.github.io/blogs">
                        <span className={styles.slowBlink}>/</span>blogs
                    </a>
                </div>
                <div className={styles.techstack}>
                    <a href="https://jxxt.github.io/techstack">
                        <span className={styles.slowBlink}>/</span>techstack
                    </a>
                </div>
            </div>

            <div className={styles.themeBtn}>
                <img src={lightIcon} alt="" height="22px" />
            </div>
        </div>
    );
}

export default Header;
