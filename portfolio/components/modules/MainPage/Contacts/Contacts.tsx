    import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
    import {ContactsStyled} from "../../../../src/globalStyles/contacts/contacts.styled.tsx";

    const Contacts = () => {
        return (
            <ContactsStyled>
                <BlockTitle text={"contacts"}/>
                <div className="contactsContainer">
                    <div className="contactsDescription">
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                            hesitate to contact me</p>
                    </div>
                    <div className="contactsMessage">
                        <span>Message me here</span>
                        <div className="contactMethod">
                            <img src="../../../public/img/Github.svg" alt=""/>
                            <a>NikitaVlas</a>
                        </div>
                        <div className="contactMethod">
                            <img src="../../../public/img/Linkedin.svg" alt=""/>
                            <a>nikita-vlasov</a>
                        </div>
                        <div className="contactMethod">
                            <img src="../../../public/img/Email.svg" alt=""/>
                            <a>nikistosov@gmail.com</a>
                        </div>
                        <div className="contactMethod">
                            <img src="../../../public/img/Telegram.svg" alt=""/>
                            <a>@sibjpeg</a>
                        </div>
                    </div>
                </div>
            </ContactsStyled>
        );
    };

    export default Contacts;