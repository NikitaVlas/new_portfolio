import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";
import {ProjectsStyled} from "../../../../src/globalStyles/projects/projects.styled.tsx";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <ProjectsStyled>
            <div className="projectsHead">
                <BlockTitle text={"projects"}/>
                <LinkButton title={"View all"} to="/pages/works"/>
            </div>
            <div className="image-slider-container">
                <Slider  {...settings}>
                    <div>
                        <ProjectCart tex={"React, Node.js"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                    </div>
                    <div>
                        <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                    </div>
                    <div>
                        <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                    </div>
                    <div>
                        <ProjectCart tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"} description={"Get answers to your kahoot quiz"}/>
                    </div>
                </Slider>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;