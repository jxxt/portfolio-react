import styles from "./ProjectsCard.module.css";

const ProjectsCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.buttons}>
                <div className={styles.codeBtn}>
                    <a href={props.code}>
                        <button>Code</button>
                    </a>
                </div>
                <div className={styles.previewBtn}>
                    <a href={props.preview}>
                        <button>Preview</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
