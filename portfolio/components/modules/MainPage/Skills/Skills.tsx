import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Skill from "./Skill.tsx";
import {SkillsStyled} from "../../../../src/globalStyles/skills/skills.styled.tsx";

type SkillsProps = {
    block: boolean
    span: string
    img: boolean
}

const Skills = ({block, span, img}: SkillsProps) => {
    return (
        <SkillsStyled>
            <BlockTitle text={"skills"} span={span} img={img}/>
            <div className={block ? "container" : "containerAboutPage"}>
                {block ? <div className="elements">
                    <span className={"pseudo"}/>
                    {/*<img className="doubleSquad" src="../../../../public/img/doubleSquad.svg" alt=""/>*/}
                </div> : ""}
                <div className="skillsContainer">
                    <Skill block={block} title={"Languages"} skill={"JavaScript TypeScript Node.JS PHP Java"}/>
                    <Skill block={block} title={"Databases"} skill={"MariaDB MongoDB"}/>
                    <Skill block={block} title={"Libraries/Frameworks"} skill={"React Express.js Angular Fusion FLow SCSS MaterialUI Bootstrap"}/>
                    <Skill block={block} title={"Tools"} skill={"WebStorm VSCode Figma Git Postman Storybook"}/>
                    <Skill block={block} title={"Other"} skill={"HTML CSS REST NEOS CMS"}/>
                </div>
            </div>

        </SkillsStyled>
    );
};

export default Skills;