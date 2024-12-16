import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <html lang="en">
        <Header/>
        <Outlet/>
        <Footer/>
        </html>
    );
};

export default App;