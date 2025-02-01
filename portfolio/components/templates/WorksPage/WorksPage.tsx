import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import ProjectCart from "../../modules/MainPage/Projects/ProjectCart.tsx";
import styled from "styled-components";
import cardPortfolio from "../../../src/assets/cardPortfolio.png";
import cardCustomer from "../../../src/assets/cardCustomer.png";
import cardBlog from "../../../src/assets/cardBLog.png";
import cardNova from "../../../src/assets/cardNova.png";


const WorksPage = () => {
    return (
        <div>
            <BlockTitle text={"projects"} span={"/"} img={false}/>
            <ProjectCartContainer>
                <ProjectCart img={cardPortfolio}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/new_portfolio"}
                />
                <ProjectCart img={cardCustomer}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/selfmade"}
                />
                <ProjectCart img={cardBlog}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/blogMERN"}
                />
                <ProjectCart img={cardNova}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
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