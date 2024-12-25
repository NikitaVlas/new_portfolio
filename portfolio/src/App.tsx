import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {setLang} from "../context/lang.ts";
import {AllowedLangs} from "../constants/lang.ts";
import Button from "../components/elements/Button/Button.tsx";

const App = () => {
    const handleSwitchLang = (lang:string) =>{
        setLang(lang as AllowedLangs)
        localStorage.setItem("lang", JSON.stringify(lang));
    }

    const handleSwitchLangToEn = () => handleSwitchLang("en")
    const handleSwitchLangToDe = () => handleSwitchLang("de")
    const handleSwitchLangToRu = () => handleSwitchLang("ru")

    return (
        <AppStyled>
            <ExternalContainer>
                <Button onClick={handleSwitchLangToEn} title={"EN"}/>
                <Button onClick={handleSwitchLangToDe} title={"DE"}/>
                <Button onClick={handleSwitchLangToRu} title={"RU"}/>
            </ExternalContainer>
            <Container>
                <Header/>
                <Outlet/>
                <Footer/>
            </Container>
        </AppStyled>

    );
};

export const AppStyled = styled.div`
    display: flex;
`

export const ExternalContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    max-width: 1024px;
    background-color: #1D2533;
    margin: 0 auto;
    padding: 0 15px;
`

export default App;