import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 32px 0 32px 0;
    
    .footerContainer {
        margin: 32px 0 54px 0;
        display: flex;
        justify-content: space-between;
        
        .footerLeft {
            a {
                color: ${theme.colors.primary};
            }
            
            span {
                margin-left: 24px;
                color: ${theme.colors.secondary};
            }
        }
        
        .footerRight {
            .footer-link {
                margin-top: 18px;
            }
            
            span {
                font-size: ${theme.fontsize.h4};
            }
            a {
                margin-right: 16px;
                width: 32px;
                height: 32px;
            }
            img:last-child {
                margin-right: 0; 
            }
        }
    }
    
    .copyright {
        display: flex;
        justify-content: center;
        color: ${theme.colors.secondary}
    }
`