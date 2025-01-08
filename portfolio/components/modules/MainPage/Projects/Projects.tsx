import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";
import {ProjectsStyled} from "../../../../src/globalStyles/projects/projects.styled.tsx";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1300: { items: 3 },
};

const items = [
    <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>,
    <ProjectCart tex={"React, Node.js"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>,
    <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>,
    <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>,
    <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}  description={"Get answers to your kahoot quiz"}/>
];


const Projects = () => {
    return (
        <ProjectsStyled>
            <div className="projectsHead">
                <BlockTitle text={"projects"}/>
                <LinkButton title={"View all"}  to="/pages/works"/>
            </div>
            <div className="projectsBody">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    paddingLeft={50}
                    paddingRight={50}
                    responsive={responsive}
                    disableDotsControls
                />
            </div>
        </ProjectsStyled>
    );
};

export default Projects;