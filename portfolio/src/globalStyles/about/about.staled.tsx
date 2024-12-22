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
        }
    }
`