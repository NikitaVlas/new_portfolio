import BlockTitle from "../../../elements/BlockTitle/BlockTitle";
import {ContactsStyled} from "../../../../src/globalStyles/contacts/contacts.styled.tsx";
import {useLang} from "../../../../hooks/useLang.ts";
import githubLogo from "@/assets/Github.svg";
import linkedinLogo from "@/assets/Linkedin.svg";
import emailLogo from "@/assets/Email.svg";
import telegramLogo from "@/assets/Telegram.svg";
import {Link} from "react-router-dom";

type ContactsProps = {
    span: string
    img: boolean
}

const Contacts = ({span, img}: ContactsProps) => {
    const {lang, translations} = useLang()

    return (
        <ContactsStyled>
            <BlockTitle text={translations[lang].contacts.contacts} span={span} img={img}/>
            <div className="contactsContainer">
                <div className="contactsDescription">
                    <p>{translations[lang].contacts.opportunities}</p>
                    <Link className="link__button" to={"/pages/contacts"}><span>{translations[lang].hero.button}</span></Link>
                </div>
                <div className="contactsMessage">
                    <span>{translations[lang].contacts.message}</span>
                    <div className="contactMethod">
                        <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer"><img src={githubLogo}
                                                                     alt=""/></a>
                        <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer">NikitaVlas</a>
                    </div>
                    <div className="contactMethod">
                        <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank" rel="noopener noreferrer"><img
                            src={linkedinLogo} alt=""/></a>
                        <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank" rel="noopener noreferrer">nikita-vlasov</a>
                    </div>
                    <div className="contactMethod">
                        <a href={"mailto:nikistosov@gmail.com"}><img src={emailLogo} alt=""/></a>
                        <a href={"mailto:nikistosov@gmail.com"}>nikistosov@gmail.com</a>
                    </div>
                    <div className="contactMethod">
                        <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer"><img
                            src={telegramLogo} alt=""/></a>
                        <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer">@sibjpeg</a>
                    </div>
                </div>
            </div>
        </ContactsStyled>
    );
};

export default Contacts;