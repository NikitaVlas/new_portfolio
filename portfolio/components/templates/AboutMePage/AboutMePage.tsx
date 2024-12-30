import About from "../../modules/MainPage/About/About.tsx";
import Skills from "../../modules/MainPage/Skills/Skills.tsx";


const AboutMePage = () => {
    return (
        <div>
            <About button={false}/>
            <Skills block={false}/>
        </div>
    );
};

export default AboutMePage;