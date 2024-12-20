import styles from "./HomepageContent.module.css";

const HomepageContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.heading}>
                <span className={styles.white}>Hi, I&apos;m</span> Jeet Debnath
            </div>

            <div className={styles.subheading1}>
                <span className={styles.white}>a</span>{" "}
                <span className={styles.bigger}>Full Stack Developer</span>
            </div>

            <div className={styles.subheading2}>
                <span className={styles.white}>with</span>{" "}
                <span className={styles.big}>more focus</span>{" "}
                <span className={styles.white}>towards</span>{" "}
                <span className={styles.bigger}>Backend Development</span>
            </div>

            <div className={styles.currentProject}>
                <span className={styles.white}>
                    I&apos;m currently working on
                </span>{" "}
                <a href="./assets/comingsoon.html" className={styles.big}>
                    <u>Workout Tracker Web App</u>
                </a>
            </div>

            {/* <div className={`${styles.recentBlogs} ${styles.white}`}>
                read my recent Blogs:
            </div>
            <div className={styles.recents}>
                <div className={styles.recentOne}>
                    <u><a href="">blog one</a></u>
                </div>
                <div className={styles.recentTwo}>
                    <u><a href="">blog two</a></u>
                </div>
            </div> */}
            <div className={styles.allWorks}>
                <span className={styles.white}>checkout my</span>{" "}
                <a href="https://drive.google.com/file/d/1OXOAE3E_JnoA7VyG7ijyo7AqwPsiap4U/view">
                    <u>RESUME</u>
                </a>{" "}
                <span className={styles.white}>and all of my work</span>{" "}
                <a href="https://jxxt.github.io/projects">
                    <u>HERE</u>
                </a>
            </div>
        </div>
    );
};

export default HomepageContent;
