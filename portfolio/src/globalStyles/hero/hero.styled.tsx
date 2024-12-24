import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


export const HeroStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0;

    h1 {
        font-size: ${theme.fontsize.h1};
        
        span {
            color: ${theme.hoverColor.hover};
        }
    }
    
    span {
        color: ${theme.colors.secondary};
    }
    
    .heroBlock {
        
    }
    
    .elements {
        .doubleSquad::before {
            display: block;
            position: absolute;
            top: 212px;
            left: 706px;
        }
    }
`