import Hero from "./Hero/Hero.tsx";
import Quote from "./Quote/Quote.tsx";
import About from "./About/About.tsx";
import Contacts from "./Contacts/Contacts.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

const MainPage = () => {
    return (
        <div className="container">
            <Hero/>
            <Quote/>
            <Projects />
            <Skills/>
            <About />
            <Contacts />
        </div>
    );
};

export default MainPage;