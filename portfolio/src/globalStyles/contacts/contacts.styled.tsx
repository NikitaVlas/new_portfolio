import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";

export const ContactsStyled = styled.div`
    .contactsContainer {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 20px 0;
        
        .contactsDescription {
            max-width: 515px;

            p {
                color: ${theme.colors.secondary};
            }
        }
        
        .contactsMessage {
            display: flex;
            flex-direction: column;
            padding: 16px;
            border: 1px solid ${theme.colors.primary};

            span {
                margin-bottom: 4px;
            }
            
            .contactMethod {
                display: flex;
                align-items: center;
                margin-top: 10px;
                
                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 5px;
                }

                a {
                    color: ${theme.colors.secondary};
                }
            }
        }
    }
`