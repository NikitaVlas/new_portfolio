import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {HeroStyled} from "../../../../src/globalStyles/hero/hero.styled.tsx";

const Hero = () => {
    return (
        <HeroStyled>
            <div className="heroBlock">
                <h1>Nikita is a <span>front-end</span> developer</h1>
                <span>He crafts responsive websites where technologies meet creativity</span>
                <div>
                    <LinkButton title={"Contact me!"} to={"/pages/contacts"}/>
                </div>

            </div>
            <div>
                <img src="../../../../public/img/photoHero.png" alt=""/>
                <div>
                    <img src="../../../../public/img/Rectangle.svg" alt=""/>
                    <span>Currently working on Portfolio</span>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;