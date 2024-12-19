
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";

const Contacts = () => {
    return (
        <section>
            <BlockTitle text={"contacts"}/>
            <div >
                <div >
                    <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me</p>
                </div>
                <div >
                    <span>Message me here</span>
                    <div >
                        <img src="../../../public/img/Github.svg" alt=""/>
                        <p>NikitaVlas</p>
                    </div>

                    <img src="../../../public/img/Linkedin.svg" alt=""/>
                    <img src="../../../public/img/Email.svg" alt=""/>
                    <img src="../../../public/img/Telegram.svg" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;