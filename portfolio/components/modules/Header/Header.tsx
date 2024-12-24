import {Link} from "react-router-dom";
import {HeaderContainer} from "../../../src/globalStyles/header/header.styled.tsx";
import {useLang} from "../../../hooks/useLang.ts";

const Header = () => {
    const {lang, translations} = useLang()

    return (
        <HeaderContainer>
            <Link className="icon" to="/">Nikita</Link>
            <div className="rightContainer">
                <nav className="linkContainer">
                    <div className="pair">
                        <span>#</span><Link to="/">{translations[lang].header.home}</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/works">{translations[lang].header.works}</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/about">{translations[lang].header.about}</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/contacts">{translations[lang].header.contacts}</Link>
                    </div>
                </nav>
            </div>
        </HeaderContainer>
    );
};

export default Header;