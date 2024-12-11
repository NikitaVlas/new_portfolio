import styles from "../../../../styles/main-page/index.module.scss"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__description}>
                    <h1>Nikita is a web designer and front-end developer</h1>
                    <span>He crafts responsive websites where technologies meet creativity</span>
                    <button>Contact me</button>
                </div>
                <div className="img">
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