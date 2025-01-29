import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";
import {ProjectsStyled} from "../../../../src/globalStyles/projects/projects.styled.tsx";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useLang} from "../../../../hooks/useLang.ts";

type ProjectsProps = {
    span: string
    img: boolean
}

const Projects = ({span, img}: ProjectsProps) => {
    const {lang, translations} = useLang()

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <ProjectsStyled>
            <div className="projectsHead">
                <BlockTitle text={translations[lang].project.projects} span={span} img={img}/>
                <LinkButton title={translations[lang].project.buttonView} to="/pages/works"/>
            </div>
            <div className="image-slider-container">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                <Slider {...settings}>
                    <ProjectCart img={"../../public/img/cardPortfolio.png"}
                                 tex={"React, Node.js"} title={"Portfolio"}
                                 description={"Get answers to your kahoot quiz"}
                                 to={"https://github.com/NikitaVlas/new_portfolio"}
                    />
                    <ProjectCart img={"../../public/img/cardCustomer.png"}
                                 tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}
                                 description={"Get answers to your kahoot quiz"}
                                 to={"https://github.com/NikitaVlas/selfmade"}
                    />
                    <ProjectCart img={"../../public/img/cardBlog.png"}
                                 tex={"NEOS CMS, PHP, MariaDB"} title={"ProtectX"}
                                 description={"Get answers to your kahoot quiz"}
                                 to={"https://github.com/NikitaVlas/blogMERN"}
                    />
                    <ProjectCart img={"../../public/img/cardNova.png"}
                                 tex={"NEOS CMS, PHP, MariaDB"} title={"Nova Academy"}
                                 description={"Get answers to your kahoot quiz"}
                                 to={"https://github.com/NikitaVlas/nova_academy"}
                    />
                </Slider>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;