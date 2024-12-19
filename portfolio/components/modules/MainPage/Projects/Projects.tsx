import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";


const Projects = () => {
    return (
        <section>
            <BlockTitle text={"projects"}/>
            <div>
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
            </div>
        </section>
    );
};

export default Projects;