import {FooterStyled} from "../../../src/globalStyles/footer/footer.styled.tsx";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterStyled>
            <img src="../../../public/img/LineFooter.svg" alt=""/>
            <div className="footerContainer">
                <div className="footerLeft">
                    <Link className="icon" to="/">Nikita</Link>
                    <span>nikistosov@gmail.com</span>
                </div>
                <div className="footerRight">
                    <div>
                        <span>Media</span>
                    </div>
                    <div>
                        <img src="../../../public/img/Github.svg" alt=""/>
                        <img src="../../../public/img/Linkedin.svg" alt=""/>
                        <img src="../../../public/img/Email.svg" alt=""/>
                        <img src="../../../public/img/Telegram.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>© Copyright 2024. Made by Nikita</span>
            </div>
        </FooterStyled>
    );
};

export default Footer;