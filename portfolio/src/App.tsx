import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const App = () => {
    return (
        <Container>
            <Header/>
            <Outlet/>
            <Footer/>
        </Container>
    );
};

export const Container = styled.div`
    max-width: 1024px;
    background-color: #1D2533;
    margin: 0 auto;
    padding: 0 15px;
`

export default App;