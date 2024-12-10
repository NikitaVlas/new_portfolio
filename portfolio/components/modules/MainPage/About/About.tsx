import styles from "../../../../styles/about/index.module.scss";
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";

const About = () => {
    return (
        <div>
            <section className={styles.about}>
                <BlockTitle text={"about-me"}/>
                <div className={`container ${styles.about__container}`}>
                    <div>
                        <p>Hello, i’m Nikita!
                            <br/>
                            I’m a self-taught front-end developer based in Cologne, Germany. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                        <button>Read more</button>
                    </div>
                    <div className={styles.img}>
                        <img src="../../../../public/img/photoabout.png" alt=""/>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default About;