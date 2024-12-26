import {ButtonProps} from "../../../types/elements.ts";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


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

    padding-bottom: 10px;
    color: ${theme.colors.secondary};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`

export default Button;