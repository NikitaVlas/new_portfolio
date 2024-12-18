import styles from "../../../../styles/projects/index.module.scss";
import Button from "../../../elements/Button/Button.tsx";

type ProjectCartProps = {
    tex: string
    title: string
    description: string
}

const ProjectCart = ({tex, title, description}: ProjectCartProps) => {
    return (
        <div className={styles.projectCart}>
            <img src="../../../public/img/project1.png" alt=""/>
            <p>{tex}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.projectCart__container_button}>
                <Button title={"Live"} to={"#"}/>
                <Button title={"GitHub"}/>
            </div>
        </div>
    );
};

export default ProjectCart;