import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {setLang} from "../context/lang.ts";
import {AllowedLangs} from "../constants/lang.ts";

const App = () => {
    const handleSwitchLang = (lang:string) =>{
        setLang(lang as AllowedLangs)
        localStorage.setItem("lang", JSON.stringify(lang));
    }

    const handleSwitchLangToEn = () => handleSwitchLang("en")
    const handleSwitchLangToDe = () => handleSwitchLang("de")
    const handleSwitchLangToRu = () => handleSwitchLang("ru")

    return (
        <div>
            <div>
                <button onClick={handleSwitchLangToEn}>EN</button>
                <button onClick={handleSwitchLangToDe}>DE</button>
                <button onClick={handleSwitchLangToRu}>RU</button>
            </div>
            <Container>
                <Header/>
                <Outlet/>
                <Footer/>
            </Container>
        </div>

    );
};

export const Container = styled.div`
    max-width: 1024px;
    background-color: #1D2533;
    margin: 0 auto;
    padding: 0 15px;
`

export default App;