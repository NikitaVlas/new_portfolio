import {ButtonProps} from "../../../types/elements.ts";
import styled from "styled-components";


const Button = ({title, onClick}: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick}>
            {title}
        </ButtonStyled>
    );
};

export const ButtonStyled = styled.button`
    all: unset;
    width: 25px;
    height: 50px;
`

export default Button;