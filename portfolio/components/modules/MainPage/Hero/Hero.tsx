
import Button from "../../../elements/Button/Button.tsx";

const Hero = () => {
    return (
        <section>
            <div >
                <div>
                    <h1>Nikita is a web designer and front-end developer</h1>
                    <span>He crafts responsive websites where technologies meet creativity</span>
                    <Button title={"Contact me"} to={"/pages/contacts"}/>
                </div>
                <div >
                    <img src="../../../../public/img/photoHero.png" alt=""/>
                    <div>
                        <img src="../../../../public/img/Rectangle.svg" alt=""/>
                        <span>Currently working on Portfolio</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;