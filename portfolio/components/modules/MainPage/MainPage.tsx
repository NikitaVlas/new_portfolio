import Hero from "./Hero/Hero.tsx";
import Quote from "./Quote/Quote.tsx";
import About from "./About/About.tsx";

const MainPage = () => {
    return (
        <section className="container">
            <Hero/>
            <Quote/>
            <About />
        </section>
    );
};

export default MainPage;