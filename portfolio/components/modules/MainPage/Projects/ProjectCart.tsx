import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";

type ProjectCartProps = {
    tex: string
    title: string
    description: string
}

const ProjectCart = ({tex, title, description}: ProjectCartProps) => {
    return (
        <div>
            <img src="../../../public/img/project1.png" alt=""/>
            <p>{tex}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <LinkButton title={"Live"} to={"#"}/>
                <LinkButton title={"GitHub"}/>
            </div>
        </div>
    );
};

export default ProjectCart;