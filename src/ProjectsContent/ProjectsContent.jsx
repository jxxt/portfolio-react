import ProjectsCard from "../ProjectsCard/ProjectsCard";
import styles from "./ProjectsContent.module.css";

import i from "../assets/i.png";
import one from "../assets/one.svg";
import two from "../assets/two.svg";

const ProjectsContent = () => {
    const projectCards = [
        {
            image: one,
            title: "get-ripped",
            description: "a minimalist workout tracker app",
            code: "https://github.com/getripped/web-app",
            preview: "https://getripped.vercel.app/",
        },
        {
            image: two,
            title: "Rochambeau",
            description: "simple rock-paper-scissors game",
            code: "https://github.com/jxxt/Rochambeau",
            preview: "https://jxxt.github.io/Rochambeau/",
        },
        {
            image: i,
            title: "Project 3",
            description: "Description for Project 3",
            code: "https://www.github.com",
            preview: "https://www.github.com",
        },
        {
            image: i,
            title: "Project 3",
            description: "Description for Project 3",
            code: "https://www.github.com",
            preview: "https://www.github.com",
        },
    ];

    return (
        <div className={styles.content}>
            {projectCards.map((card, index) => (
                <ProjectsCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    code={card.code}
                    preview={card.preview}
                />
            ))}
        </div>
    );
};

export default ProjectsContent;
