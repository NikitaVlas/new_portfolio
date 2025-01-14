import {useLang} from "../../../hooks/useLang";
import {useUnit} from "effector-react/compat";
import {$menuIsOpen, closeMenu} from "../../../context/modals";
import {removeOverflowHiddenFromBody} from "../../../lib/utils/common.ts";
import {Link} from "react-router-dom";

const Menu = () => {
    const menuIsOpen = useUnit($menuIsOpen)
    const {lang, translations} = useLang()

    const handleCloseMenu = () => {
        removeOverflowHiddenFromBody()
        closeMenu()
    }

    return (
        <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
            <button
                className={`nav-menu__close ${menuIsOpen ? 'open' : ''}`}
                onClick={handleCloseMenu}
            />
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
        </nav>
    );
};

export default Menu;