import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Skill from "./Skill.tsx";


const Skills = () => {
    return (
        <section>
            <BlockTitle text={"skills"}/>
            <div>
                <div></div>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                <Skill title={"Languages"} skill={"TypeScript, JS"}/>
            </div>
        </section>
    );
};

export default Skills;