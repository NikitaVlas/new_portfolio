import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


export const ProjectsStyled = styled.div`
    .projectsHead {
        display: flex;
        justify-content: space-between;
        
        .link__button {
            margin-top: 40px;
            margin-right: 10px;
            color: ${theme.colors.secondary};
            
            span {
                transition: color 0.3s ease;
            }
            
            &:hover {
                span {
                    color: ${theme.colors.primary};
                }
            }
        }
    }
`