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