import {useLang} from "../../../hooks/useLang";
import {useUnit} from "effector-react/compat";
import {$menuIsOpen, closeMenu} from "../../../context/modals";
import {removeOverflowHiddenFromBody} from "../../../lib/utils/common.ts";
import {Link} from "react-router-dom";
import Button from "../../elements/Button/Button.tsx";
import {setLang} from "../../../context/lang.ts";
import {AllowedLangs} from "../../../constants/lang.ts";

const Menu = () => {
    const menuIsOpen = useUnit($menuIsOpen)
    const {lang, translations} = useLang()

    const handleCloseMenu = () => {
        removeOverflowHiddenFromBody()
        closeMenu()
    }

    const handleSwitchLang = (lang:string) =>{
        setLang(lang as AllowedLangs)
        localStorage.setItem("lang", JSON.stringify(lang));
    }

    const handleSwitchLangToEn = () => handleSwitchLang("en")
    const handleSwitchLangToDe = () => handleSwitchLang("de")
    const handleSwitchLangToRu = () => handleSwitchLang("ru")


    return (
        <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
            <button
                className={`nav-menu__close ${menuIsOpen ? 'open' : ''}`}
                onClick={handleCloseMenu}
            />

            <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
                <Button onClick={handleSwitchLangToEn} title={"en"}/>
                <Button onClick={handleSwitchLangToDe} title={"de"}/>
                <Button onClick={handleSwitchLangToRu} title={"ru"}/>
            </div>
            <nav className={`nav-menu__list ${menuIsOpen ? 'open' : ''}`}>
                <div className="nav-menu__list__item">
                    <span className="nav-menu__list__item__span">#</span><Link className="nav-menu__list__item__link" to="/">{translations[lang].header.home}</Link>
                </div>
                <div className="nav-menu__list__item">
                    <span className="nav-menu__list__item__span">#</span><Link className="nav-menu__list__item__link" to="/pages/works">{translations[lang].header.works}</Link>
                </div>
                <div className="nav-menu__list__item">
                    <span className="nav-menu__list__item__span">#</span><Link className="nav-menu__list__item__link" to="/pages/about">{translations[lang].header.about}</Link>
                </div>
                <div className="nav-menu__list__item">
                    <span className="nav-menu__list__item__span">#</span><Link className="nav-menu__list__item__link" to="/pages/contacts">{translations[lang].header.contacts}</Link>
                </div>
            </nav>
        </nav>
    );
};

export default Menu;