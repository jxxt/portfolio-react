import styles from "./Footer.module.css";
import githubIcon from "../assets/dark_github.svg"
import instagramIcon from "../assets/dark_instagram.svg"
import linkedinIcon from "../assets/dark_linkedin.svg"
import mailIcon from "../assets/dark_mail.svg"
import twitterIcon from "../assets/dark_twitter.svg"


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <span className={styles.copyrightSpan}>&#169;</span> 2024
            </div>

            <div className={styles.icons}>
                <a href="https://github.com/jxxt">
                    <img
                        className={styles.g}
                        src={githubIcon}
                        alt=""
                        height="22px"
                    />
                </a>
                <a href="https://www.linkedin.com/in/jeetdebnath/">
                    <img
                        className={styles.l}
                        src={linkedinIcon}
                        alt=""
                        height="22px"
                    />
                </a>
                <a href="mailto:iamjxxt@gmail.com">
                    <img
                        className={styles.m}
                        src={mailIcon}
                        alt=""
                        height="22px"
                    />
                </a>
                <a href="https://twitter.com/jeettwts">
                    <img
                        className={styles.t}
                        src={twitterIcon}
                        alt=""
                        height="22px"
                    />
                </a>
                <a href="https://instagram.com/iamjxxt">
                    <img
                        className={styles.i}
                        src={instagramIcon}
                        alt=""
                        height="22px"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;
