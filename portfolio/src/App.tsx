import Header from "../components/modules/Header/Header.tsx";
import Footer from "../components/modules/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default App;