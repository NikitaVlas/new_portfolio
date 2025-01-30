import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";

// import squad1 from ;


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
        position: relative;
        overflow: hidden;

        .mainIMG {
            position: relative;
            z-index: 2;
        }
        
        .squad1{
            position: absolute;
            top: 237px;
            left: 250px;
            z-index: 3;
        }
        
        .doubleSquad {
            position: absolute;
            z-index: 1;
            top: 50px;
            left: 40px;
        }
`