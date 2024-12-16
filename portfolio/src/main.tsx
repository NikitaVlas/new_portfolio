import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App.tsx'
import "./globalStyles/globals.css"
import "./globalStyles/header.css"
import "./globalStyles/footer.css"
import Works from "../public/pages/works/works.tsx";
import PageLayout from "../components/layouts/PageLayout.tsx";
import AboutMe from "../public/pages/about/about.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<PageLayout />} />
                    <Route path="/pages/works" element={<Works/>}/>
                    <Route path="/pages/about" element={<AboutMe/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
