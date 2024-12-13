import styles from "../../../../styles/projects/index.module.scss";

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
            <div>
                <button>Live</button>
                <button>GitHub</button>
            </div>
        </div>
    );
};

export default ProjectCart;