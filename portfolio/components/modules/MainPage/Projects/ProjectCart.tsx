import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {ProjectCartStyled} from "../../../../src/globalStyles/projects/projectCart.styled.tsx";

type ProjectCartProps = {
    tex: string
    title: string
    description: string
}

const ProjectCart = ({tex, title, description}: ProjectCartProps) => {
    return (
        <ProjectCartStyled>
            <img src="../../../public/img/project1.png" alt=""/>
            <div className="text">
                <p className="stack">{tex}</p>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="containerButton">
                    <LinkButton title={"GitHub"}/>
                </div>
            </div>
        </ProjectCartStyled>
    );
};

export default ProjectCart;