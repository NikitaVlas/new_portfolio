import About from "../../modules/MainPage/About/About.tsx";
import Skills from "../../modules/MainPage/Skills/Skills.tsx";
import MyFunFacts from "../../modules/SecondPages/MyFunFacts/MyFunFacts.tsx";


const AboutMePage = () => {
    return (
        <div>
            <About button={false} span={"/"} img={false}/>
            <Skills block={false} span={"#"} img={false}/>
            <MyFunFacts/>
        </div>
    );
};

export default AboutMePage;