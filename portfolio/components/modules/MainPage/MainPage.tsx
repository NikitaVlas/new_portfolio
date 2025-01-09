import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";
import Contacts from "./Contacts/Contacts.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

const MainPage = () => {
    return (
        <div className="container">
            <Hero/>
            <Skills block={true}/>
            <Projects />
            <About button={true}/>
            <Contacts />
        </div>
    );
};

export default MainPage;