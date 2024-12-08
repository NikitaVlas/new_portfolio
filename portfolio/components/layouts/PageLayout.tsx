import Header from "../modules/Header/Header.tsx";
import Footer from "../modules/Footer/Footer.tsx";
import MainPage from "../modules/MainPage/MainPage.tsx";

const PageLayout = () => {
    return (
        <div>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
};

export default PageLayout;