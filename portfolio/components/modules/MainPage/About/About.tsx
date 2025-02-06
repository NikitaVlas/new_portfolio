import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import {AboutStyled} from "../../../../src/globalStyles/about/about.staled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";
import photoAbout from "../../../../src/assets/photoabout.png"
import {Link} from "react-router-dom";

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
                    {button ? <Link className="link__button" to="/pages/about"><span>{translations[lang].about.button}</span></Link> : ""}
                </div>
                <div >
                    <img src={photoAbout} alt=""/>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;