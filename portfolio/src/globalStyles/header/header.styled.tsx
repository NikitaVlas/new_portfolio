import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 32px 0 32px 0;
    
    .icon {
        color: ${theme.colors.primary};
    }
    
    .rightContainer {
        .linkContainer {
            display: flex;
            
            .pair {
                span {
                    margin-left: 32px;
                    margin-right: 2px;
                    color: ${theme.hoverColor.noHover};
                    transition: color 0.3s ease;
                }
                
                a {
                    color: ${theme.colors.secondary};
                    transition: color 0.3s ease;
                }

                &:hover span{
                    color: ${theme.hoverColor.hover};
                }

                &:hover a{
                    color: ${theme.colors.primary};
                }
            }
        }
    }
`

