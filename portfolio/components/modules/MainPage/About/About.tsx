
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import LinkButton from "../../../elements/LinkButton/LinkButton.tsx";
import {AboutStyled} from "../../../../src/globalStyles/about/about.staled.tsx";

type AboutProps = {
    button: boolean
    span: string
    img: boolean
}

const About = ({button, span, img}: AboutProps) => {
    return (
        <AboutStyled>
            <BlockTitle text={"about-me"} span={span} img={img}/>
            <div className="aboutContainer">
                <div className="aboutDescription">
                    <p>Hello, i’m Nikita!
                        <br/>
                        I’m a self-taught front-end developer based in Cologne, Germany. I can develop responsive
                        websites from scratch and raise them into modern user-friendly web experiences.
                        <br/>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</p>
                    {button ? <LinkButton title={"Read more"} to={"/pages/about"}/> : ""}
                </div>
                <div >
                    <img src="../../../../public/img/photoabout.png" alt=""/>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;