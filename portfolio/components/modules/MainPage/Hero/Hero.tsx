import {HeroStyled} from "../../../../src/globalStyles/hero/hero.styled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";
import photoHero from "../../../../src/assets/photoHero.png";
import rectangle from "../../../../src/assets/Rectangle.svg";
import squad1 from "../../../../src/assets/squad1.svg";
import doubleSquad from "../../../../src/assets/doubleSquad.svg";
import {Link} from "react-router-dom";
import DownloadButton from "../../../elements/Button/DownloadButton.tsx";

const Hero = () => {
    const {lang, translations} = useLang()

    return (
        <HeroStyled>
            <div className="heroBlock">
                <h1>{translations[lang].hero.title1}<span>{translations[lang].hero.title2}</span>{translations[lang].hero.title3}
                </h1>
                <span>{translations[lang].hero.underTitle}</span>
                <Link className="link__button" to="/pages/contacts"><span>{translations[lang].hero.button}</span></Link>
                <DownloadButton/>
            </div>
            <div className="elements">
                <img className="squad1"  src={squad1} alt=""/>
                <img className="doubleSquad"  src={doubleSquad} alt=""/>
                <img className="mainIMG" src={photoHero} alt=""/>
                <div>
                    <img src={rectangle} alt=""/>
                    <span>{translations[lang].hero.currently}</span>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;