import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import ProjectCart from "./ProjectCart.tsx";
import {ProjectsStyled} from "../../../../src/globalStyles/projects/projects.styled.tsx";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useLang} from "../../../../hooks/useLang.ts";
import cardPortfolio from "../../../../src/assets/cardPortfolio.png";
import cardCustomer from "../../../../src/assets/cardCustomer.png";
import cardBlog from "../../../../src/assets/cardBLog.png";
import cardNova from "../../../../src/assets/cardNova.png";

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
                    <ProjectCart img={cardPortfolio}
                                 tex={translations[lang].project.cardTex}
                                 title={translations[lang].project.cardTitle}
                                 description={translations[lang].project.cardDescription}
                                 to={"https://github.com/NikitaVlas/new_portfolio"}
                    />
                    <ProjectCart img={cardCustomer}
                                 tex={translations[lang].project.cardSelfMadeText}
                                 title={translations[lang].project.cardSelfMadeTitle}
                                 description={translations[lang].project.cardSelfMadeDescription}
                                 to={"https://github.com/NikitaVlas/selfmade"}
                    />
                    <ProjectCart img={cardBlog}
                                 tex={translations[lang].project.cardBlogText}
                                 title={translations[lang].project.cardBlogTitle}
                                 description={translations[lang].project.cardBlogDescription}
                                 to={"https://github.com/NikitaVlas/blogMERN"}
                    />
                    <ProjectCart img={cardNova}
                                 tex={translations[lang].project.cardNovaText}
                                 title={translations[lang].project.cardNovaTitle}
                                 description={translations[lang].project.cardNovaDescription}
                                 to={"https://github.com/NikitaVlas/nova_academy"}
                    />
                </Slider>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;