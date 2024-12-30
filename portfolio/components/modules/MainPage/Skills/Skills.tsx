import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Skill from "./Skill.tsx";
import {SkillsStyled} from "../../../../src/globalStyles/skills/skills.styled.tsx";

type SkillsProps = {
    block: boolean
}

const Skills = ({block}: SkillsProps) => {
    return (
        <SkillsStyled>
            <BlockTitle text={"skills"}/>
            <div className={block ? "container" : "containerAboutPage"}>
                {block ? <div className="elements">
                    <img className="doubleSquad" src="../../../../public/img/doubleSquad.svg" alt=""/>
                </div> : ""}
                <div className="skillsContainer">
                    <Skill block={block} title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill block={block} title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill block={block} title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill block={block} title={"Languages"} skill={"TypeScript, JS"}/>
                    <Skill block={block} title={"Languages"} skill={"TypeScript, JS"}/>
                </div>
            </div>

        </SkillsStyled>
    );
};

export default Skills;