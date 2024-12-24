import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";
import {ProjectsStyled} from "../../../../src/globalStyles/projects/projects.styled.tsx";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";


const Projects = () => {
    return (
        <ProjectsStyled>
            <div className="projectsHead">
                <BlockTitle text={"projects"}/>
                <LinkButton title={"View all"}  to="/pages/works"/>
            </div>
            <div className="projectsBody">
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;