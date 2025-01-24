import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import ProjectCart from "../../modules/MainPage/Projects/ProjectCart.tsx";
import styled from "styled-components";

const WorksPage = () => {
    return (
        <div>
            <BlockTitle text={"projects"} span={"/"} img={false}/>
            <ProjectCartContainer>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}/>
                <ProjectCart tex={"React, Node.js"} title={"ProtectX"}
                             description={"Get answers to your kahoot quiz"}/>

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