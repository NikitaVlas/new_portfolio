import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import {ContactsStyled} from "../../../../src/globalStyles/contacts/contacts.styled.tsx";

type ContactsProps = {
    span: string
    img: boolean
}

const Contacts = ({span, img}: ContactsProps) => {
    return (
        <ContactsStyled>
            <BlockTitle text={"contacts"} span={span} img={img}/>
            <div className="contactsContainer">
                <div className="contactsDescription">
                    <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me</p>
                </div>
                <div className="contactsMessage">
                    <span>Message me here</span>
                    <div className="contactMethod">
                        <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer"><img src="../../../public/img/Github.svg"
                                                                     alt=""/></a>
                        <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer">NikitaVlas</a>
                    </div>
                    <div className="contactMethod">
                        <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank" rel="noopener noreferrer"><img
                            src="../../../public/img/Linkedin.svg" alt=""/></a>
                        <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank" rel="noopener noreferrer">nikita-vlasov</a>
                    </div>
                    <div className="contactMethod">
                        <a href={"mailto:nikistosov@gmail.com"}><img src="../../../public/img/Email.svg" alt=""/></a>
                        <a href={"mailto:nikistosov@gmail.com"}>nikistosov@gmail.com</a>
                    </div>
                    <div className="contactMethod">
                        <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer"><img
                            src="../../../public/img/Telegram.svg" alt=""/></a>
                        <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer">@sibjpeg</a>
                    </div>
                </div>
            </div>
        </ContactsStyled>
    );
};

export default Contacts;