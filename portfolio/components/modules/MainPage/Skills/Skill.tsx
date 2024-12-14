import styles from "../../../../styles/skills/index.module.scss";

type SKillProps = {
    skill: string
    title: string
}

const Skill = ({skill, title}: SKillProps) => {
    return (
        <div className={styles.skill}>
            <h3>{title}</h3>
            <p>{skill}</p>
        </div>
    );
};

export default Skill;