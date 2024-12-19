
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import Button from "../../../elements/Button/Button.tsx";

const About = () => {
    return (
        <section >
            <BlockTitle text={"about-me"}/>
            <div >
                <div>
                    <p>Hello, i’m Nikita!
                        <br/>
                        I’m a self-taught front-end developer based in Cologne, Germany. I can develop responsive
                        websites from scratch and raise them into modern user-friendly web experiences.
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</p>
                    <Button title={"Read more"} to={"/pages/about"}/>
                </div>
                <div >
                    <img src="../../../../public/img/photoabout.png" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default About;