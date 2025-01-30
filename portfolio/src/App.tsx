import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {setLang} from "../context/lang.ts";
import {AllowedLangs} from "../constants/lang.ts";
import Button from "../components/elements/Button/Button.tsx";
import {theme} from "../styles/Theme.styled.tsx";
import {useCallback, useEffect, useState} from "react";

const App = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const handleResize = useCallback(() => {
        setIsDesktop(window.innerWidth >= 1024);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSwitchLang = (lang:string) =>{
        setLang(lang as AllowedLangs)
        localStorage.setItem("lang", JSON.stringify(lang));
    }

    const handleSwitchLangToEn = () => handleSwitchLang("en")
    const handleSwitchLangToDe = () => handleSwitchLang("de")
    const handleSwitchLangToRu = () => handleSwitchLang("ru")

    return (
        <AppStyled>
            {isDesktop ? (
            <ExternalContainer>
                <ContactExternal>
                    <img src="assets/img/Linevert.svg" alt=""/>
                    <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer"><img src="assets/img/Github.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank" rel="noopener noreferrer"><img src="assets/img/Linkedin.svg" alt=""/></a>
                </ContactExternal>
                <ButtonExternal>
                    <Button onClick={handleSwitchLangToEn} title={"en"}/>
                    <Button onClick={handleSwitchLangToDe} title={"de"}/>
                    <Button onClick={handleSwitchLangToRu} title={"ru"}/>
                </ButtonExternal>
            </ExternalContainer>
            ) : (
                ""
            )}
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
`

export const ButtonExternal = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    padding: 32px 0 0 0;
`

export const ContactExternal = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        margin-bottom: 8px;
    }
`

export const Container = styled.div`
    max-width: 1024px;
    background-color: ${theme.colors.backgroundColorSecondary};
    margin: 0 auto;
    padding: 0 15px;
`

export default App;