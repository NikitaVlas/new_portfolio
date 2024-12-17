import {ButtonProps} from "../../../types/elements";
import {Link} from "react-router-dom";

const Button = ({title, to}: ButtonProps) => {
    return (
        <nav className="header__menu__link">
            <Link to={to}>{title}</Link>
        </nav>
    );
};

export default Button;