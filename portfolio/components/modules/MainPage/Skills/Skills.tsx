import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Skill from "./Skill.tsx";
import {SkillsStyled} from "../../../../src/globalStyles/skills/skills.styled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";
import dotsSmall from "../../../../src/assets/dotsSmall.svg";
import doubleSquad from "../../../../src/assets/doubleSquad.svg";
import rectangleSmall from "../../../../src/assets/Rectanglesmall.svg";
import rectangleSmall2 from "../../../../src/assets/Rectanglesmall.svg";

type SkillsProps = {
    block: boolean
    span: string
    img: boolean
}

const Skills = ({block, span, img}: SkillsProps) => {
    const {lang, translations} = useLang()

    return (
        <SkillsStyled>
            <BlockTitle text={translations[lang].skills.skills} span={span} img={img}/>
            <div className={block ? "container" : "containerAboutPage"}>
                {block ? <div className="elements">
                    <img className="dotsSmall" src={dotsSmall} alt=""/>
                    <img className="rectangleSmall" src={rectangleSmall} alt=""/>
                    <img className="doubleSquad" src={doubleSquad} alt=""/>
                    <img className="rectangleSmall2" src={rectangleSmall2} alt=""/>
                </div> : ""}
                <div className="skillsContainer">
                    <Skill block={block} title={translations[lang].skills.languages} skill={"JavaScript TypeScript Node.JS PHP Java"}/>
                    <Skill block={block} title={translations[lang].skills.databases} skill={"MariaDB MongoDB"}/>
                    <Skill block={block} title={translations[lang].skills.frameworks} skill={"React Express.js Angular Fusion FLow SCSS MaterialUI Bootstrap"}/>
                    <Skill block={block} title={translations[lang].skills.tools} skill={"WebStorm VSCode Figma Git Postman Storybook"}/>
                    <Skill block={block} title={translations[lang].skills.other} skill={"HTML CSS REST NEOS CMS"}/>
                </div>
            </div>

        </SkillsStyled>
    );
};

export default Skills;