import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Skill from "./Skill.tsx";
import {SkillsStyled} from "../../../../src/globalStyles/skills/skills.styled.tsx";


const Skills = () => {
    return (
        <SkillsStyled>
            <BlockTitle text={"skills"}/>
            <div className="container">
                <div className="elements">
                    <img className="doubleSquad" src="../../../../public/img/doubleSquad.svg" alt=""/>
                </div>
                <div className="skillsContainer">
                    <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill title={"Languages"} skill={"TypeScript, JS"}/>
                </div>
            </div>

        </SkillsStyled>
    );
};

export default Skills;