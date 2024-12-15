import {ButtonProps} from "../../../types/elements";

const Button = ({title, onClick}: ButtonProps) => {
    return (
        <div>
            <a href="" onClick={onClick}>{title}</a>
        </div>
    );
};

export default Button;