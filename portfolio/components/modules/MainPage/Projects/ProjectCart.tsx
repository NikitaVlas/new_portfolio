import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {ProjectCartStyled} from "../../../../src/globalStyles/projects/projectCart.styled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";

type ProjectCartProps = {
    img?: string
    tex: string
    title: string
    description: string
    to?: string
}

const ProjectCart = ({img, tex, title, description, to}: ProjectCartProps) => {
    const {lang, translations} = useLang()

    return (
        <ProjectCartStyled>
            <img src={img} alt=""/>
            <div className="text">
                <p className="stack">{tex}</p>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="containerButton">
                    <LinkButton title={translations[lang].project.projectCartButton} to={to}/>
                </div>
            </div>
        </ProjectCartStyled>
    );
};

export default ProjectCart;