import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./globalStyles/global.css"
import "./globalStyles/menu.css"
import App from './App.tsx'
import Works from "../public/pages/works/works.tsx";
import PageLayout from "../components/layouts/PageLayout.tsx";
import AboutMe from "../public/pages/about/about.tsx";
import Contacts from "../public/pages/contacts/contacts.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/Theme.styled.tsx";


createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route index element={<PageLayout/>}/>
                        <Route path="/pages/works" element={<Works/>}/>
                        <Route path="/pages/about" element={<AboutMe/>}/>
                        <Route path="/pages/contacts" element={<Contacts/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    </ThemeProvider>
)
