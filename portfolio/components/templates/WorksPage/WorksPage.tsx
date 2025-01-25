import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import ProjectCart from "../../modules/MainPage/Projects/ProjectCart.tsx";
import styled from "styled-components";

const WorksPage = () => {
    return (
        <div>
            <BlockTitle text={"projects"} span={"/"} img={false}/>
            <ProjectCartContainer>
                <ProjectCart img={"../../public/img/cardPortfolio.png"}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/new_portfolio"}
                />
                <ProjectCart img={"../../public/img/cardCustomer.png"}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/selfmade"}
                />
                <ProjectCart img={"../../public/img/cardBlog.png"}
                             tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}
                             to={"https://github.com/NikitaVlas/blogMERN"}
                />
                <ProjectCart img={"../../public/img/cardNova.png"}
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