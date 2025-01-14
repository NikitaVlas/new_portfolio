import {Link} from "react-router-dom";
import {HeaderContainer} from "../../../src/globalStyles/header/header.styled.tsx";
import {useLang} from "../../../hooks/useLang.ts";
import Menu from "./Menu.tsx";
import {openMenu} from "../../../context/modals.ts";
import {addOverflowHiddenToBody} from "../../../lib/utils/common.ts";
import {useCallback, useEffect, useState} from "react";

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const handleResize = useCallback(() => {
        setIsDesktop(window.innerWidth >= 1024);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const {lang, translations} = useLang()

    const handleOpenMenu = () => {
        addOverflowHiddenToBody()
        openMenu()
    }

    return (
        <HeaderContainer>
            <Link className="icon" to="/">Nikita</Link>
            {isDesktop ? (
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
            ) : (
                <>
                    <button className='btn-reset header__burger' onClick={handleOpenMenu}>
                        menu
                    </button>
                    <Menu />
                </>
            )}
        </HeaderContainer>
    );
};

export default Header;