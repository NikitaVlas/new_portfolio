import Hero from "./Hero/Hero.tsx";
import Quote from "./Quote/Quote.tsx";
import About from "./About/About.tsx";
import Contacts from "./Contacts/Contacts.tsx";

const MainPage = () => {
    return (
        <section className="container">
            <Hero/>
            <Quote/>
            <About />
            <Contacts />
        </section>
    );
};

export default MainPage;