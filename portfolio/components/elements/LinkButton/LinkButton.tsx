import {ButtonProps} from "../../../types/elements";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";

const LinkButton = ({title, to}: ButtonProps) => {
    return (
        <LinkStyling>
            <a href={to}>{title}</a>
        </LinkStyling>
    );
};

const LinkStyling = styled.div`
    margin-top: 24px;
    display: flex; 
    justify-content: center;
    align-items: center;
    max-width: 148px;
    height: 39px;
    border: 2px solid ${theme.hoverColor.noHover};
    transition: border-color 0.3s ease;
    
    a {
        display: block;
        text-align: center;
        width: 100%;
        height: 100%;
        line-height: 35px;
        color: ${theme.colors.secondary};
        transition: color 0.3s ease;
        padding: 0 20px 0 20px;
    }
    
    &:hover {
        border: 2px solid ${theme.hoverColor.hover};
        
        a {
            color: ${theme.colors.primary};
        }
    }
`

export default LinkButton;