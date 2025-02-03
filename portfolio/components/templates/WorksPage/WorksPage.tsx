import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import ProjectCart from "../../modules/MainPage/Projects/ProjectCart.tsx";
import styled from "styled-components";
import cardPortfolio from "../../../src/assets/cardPortfolio.png";
import cardCustomer from "../../../src/assets/cardCustomer.png";
import cardBlog from "../../../src/assets/cardBLog.png";
import cardNova from "../../../src/assets/cardNova.png";
import {useLang} from "../../../hooks/useLang.ts";


const WorksPage = () => {
    const {lang, translations} = useLang()

    return (
        <div>
            <BlockTitle text={"projects"} span={"/"} img={false}/>
            <ProjectCartContainer>
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
            </ProjectCartContainer>
        </div>
    );
};

const ProjectCartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 0;
`

export default WorksPage;