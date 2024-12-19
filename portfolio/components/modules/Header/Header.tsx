import {Link} from "react-router-dom";
import {HeaderContainer} from "../../../src/globalStyles/header/header.styled.tsx";

const Header = () => {
    return (
        <HeaderContainer>
            <Link className="icon" to="/">Nikita</Link>
            <div className="rightContainer">
                <nav className="linkContainer">
                    <div className="pair">
                        <span>#</span><Link to="/">home</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/works">works</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/about">about-me</Link>
                    </div>
                    <div className="pair">
                        <span>#</span><Link to="/pages/contacts">contacts</Link>
                    </div>
                </nav>
                <span>Lang</span>
            </div>
        </HeaderContainer>
    );
};

export default Header;