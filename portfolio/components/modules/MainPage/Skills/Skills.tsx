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
                    <Skill block={block} title={"Languages"} skill={"JavaScript TypeScript Node.JS PHP Java"}/>
                    <Skill block={block} title={"Databases"} skill={"MariaDB MongoDB"}/>
                    <Skill block={block} title={"Frameworks"} skill={"React Express.js Angular Fusion FLow SCSS MaterialUI Bootstrap"}/>
                    <Skill block={block} title={"Tools"} skill={"WebStorm VSCode Figma Git Postman Storybook"}/>
                    <Skill block={block} title={"Other"} skill={"HTML CSS REST NEOS CMS"}/>
                </div>
            </div>

        </SkillsStyled>
    );
};

export default Skills;