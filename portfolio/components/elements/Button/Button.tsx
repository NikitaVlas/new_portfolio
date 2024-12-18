import {ButtonProps} from "../../../types/elements";
import {Link} from "react-router-dom";

const Button = ({title, to}: ButtonProps) => {
    return (
        <Link to={to}>{title}</Link>
    );
};

export default Button;