import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import styles from "../../../../styles/skills/index.module.scss";
import Skill from "./Skill.tsx";


const Skills = () => {
    return (
        <section>
            <BlockTitle text={"skills"}/>
            <div className={`container ${styles.skills__container}`}>
                <div></div>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
            </div>
        </section>
    );
};

export default Skills;