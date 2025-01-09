import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";
import Contacts from "./Contacts/Contacts.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

const MainPage = () => {
    return (
        <div className="container">
            <Hero/>
            <Skills block={true} span={"#"} img={true}/>
            <Projects span={"#"} img={true}/>
            <About button={true} span={"#"} img={true}/>
            <Contacts span={"#"} img={true}/>
        </div>
    );
};

export default MainPage;