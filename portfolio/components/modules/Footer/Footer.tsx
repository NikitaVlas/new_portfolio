import {FooterStyled} from "../../../src/globalStyles/footer/footer.styled.tsx";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterStyled>
            <img src="../../../public/img/LineFooter.svg" alt=""/>
            <div className="footerContainer">
                <div className="footerLeft">
                    <Link className="icon" to="/">Nikita</Link>
                    <a href={"mailto:nikistosov@gmail.com"}><span>nikistosov@gmail.com</span></a>
                </div>
                <div className="footerRight">
                    <div>
                        <span>Media</span>
                    </div>
                    <div className="footer-link">
                        <a href="https://github.com/NikitaVlas" target="_blank" rel="noopener noreferrer"><img
                            src="../../../public/img/Github.svg"
                            alt=""/></a>
                        <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/" target="_blank"
                           rel="noopener noreferrer"><img
                            src="../../../public/img/Linkedin.svg" alt=""/></a>
                        <a href={"mailto:nikistosov@gmail.com"}><img src="../../../public/img/Email.svg" alt=""/></a>
                        <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer"><img
                            src="../../../public/img/Telegram.svg" alt=""/></a>
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