import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {HeroStyled} from "../../../../src/globalStyles/hero/hero.styled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";
import photoHero from "../../../../src/assets/photoHero.png";
import rectangle from "../../../../src/assets/Rectangle.svg";

const Hero = () => {
    const {lang, translations} = useLang()

    return (
        <HeroStyled>
            <div className="heroBlock">
                <h1>{translations[lang].hero.title1}<span>{translations[lang].hero.title2}</span>{translations[lang].hero.title3}
                </h1>
                <span>{translations[lang].hero.underTitle}</span>
                <LinkButton title={translations[lang].hero.button} to={"/pages/contacts"}/>
            </div>
            <div className="elements">
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