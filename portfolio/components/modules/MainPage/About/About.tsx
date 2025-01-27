
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {AboutStyled} from "../../../../src/globalStyles/about/about.staled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";

type AboutProps = {
    button: boolean
    span: string
    img: boolean
}

const About = ({button, span, img}: AboutProps) => {
    const {lang, translations} = useLang()

    return (
        <AboutStyled>
            <BlockTitle text={translations[lang].about.about} span={span} img={img}/>
            <div className="aboutContainer">
                <div className="aboutDescription">
                    <p>{translations[lang].about.description}</p>
                    {button ? <LinkButton title={translations[lang].about.button} to={"/pages/about"}/> : ""}
                </div>
                <div >
                    <img src="../../../../public/img/photoabout.png" alt=""/>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;