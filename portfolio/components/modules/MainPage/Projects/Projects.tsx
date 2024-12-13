import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import styles from "../../../../styles/projects/index.module.scss";
import ProjectCart from "./ProjectCart.tsx";


const Projects = () => {
    return (
        <section className={styles.projects}>
            <BlockTitle text={"projects"}/>
            <div className={`container ${styles.projects__container}`}>
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
            </div>
        </section>
    );
};

export default Projects;