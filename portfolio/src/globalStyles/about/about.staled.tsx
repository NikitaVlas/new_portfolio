import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


export const AboutStyled = styled.div`
    .aboutContainer {
        display: flex;
        justify-content: space-between;
        
        .aboutDescription {
            max-width: 430px;
            
            p {
                color: ${theme.colors.secondary};
            }

            .link__button {
                margin-top: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 148px;
                height: 39px;
                border: 2px solid ${theme.hoverColor.noHover};
                color: ${theme.colors.secondary};

                transition: border-color 0.3s ease;

                span {
                    transition: color 0.3s ease;
                }

                &:hover {
                    border: 2px solid ${theme.hoverColor.hover};

                    span {
                        color: ${theme.colors.primary};
                    }
                }
            }
        }
    }
`