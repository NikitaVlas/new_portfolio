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

        &::after {
            content: "";
            position: absolute;
            top: 237px;
            left: 250px;
            width: 100px; /* Размер изображения */
            height: 100px;
            background: url('../../../public/img/squad1.svg') no-repeat center center;
            background-size: cover; /* Масштабирует второе изображение */
            z-index: 2; /* Поверх заднего изображения */
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 220px;
        left: 920px;
        width: 100px; /* Размер изображения */
        height: 100px;
        background: url('../../../public/img/doubleSquad.svg') no-repeat center center;
        background-size: cover; /* Масштабирует второе изображение */
        z-index: 1; /* Поверх заднего изображения */
    }
`