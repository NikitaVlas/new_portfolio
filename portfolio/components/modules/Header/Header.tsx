import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">Nikita</Link>
                <div className="header__menu">
                    <nav className="header__menu__link">
                        <Link to="/">home</Link>
                        <Link to="/pages/works">works</Link>
                        <Link to="/pages/about">about-me</Link>
                        <Link to="/pages/contacts">contacts</Link>
                    </nav>
                    <span>Lang</span>
                </div>
            </div>
        </header>
    );
};

export default Header;