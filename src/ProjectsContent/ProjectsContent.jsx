import ProjectsCard from "../ProjectsCard/ProjectsCard";
import styles from "./ProjectsContent.module.css";

import i from "../assets/i.png";

const ProjectsContent = () => {
    // Array of card objects
    const projectCards = [
        {
            image: i,
            title: "Project 1",
            description: "Description for Project 1",
            code: "https://www.google.com",
            preview: "https://www.google.com"
        },
        {
            image: i,
            title: "Project 2",
            description: "Description for Project 2",
            code: "https://www.example.com",
            preview: "https://www.example.com"
        },
        {
            image: i,
            title: "Project 3",
            description: "Description for Project 3",
            code: "https://www.github.com",
            preview: "https://www.github.com"
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
