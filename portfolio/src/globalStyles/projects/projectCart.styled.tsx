import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


export const ProjectCartStyled = styled.div`
    margin-right: 16px;
    border: 1px solid ${theme.colors.secondary};
    width: 332px;
    


    h4 {
        margin: 0;
        padding: 16px 0 16px 0;
        font-size: ${theme.fontsize.h4};
    }
    
    p {
        margin: 0;
        padding-bottom: 16px;
        color: ${theme.colors.secondary};
    }
    .text {
        padding: 0 16px 16px 16px;
    }
    
    .stack {
        padding: 8px 0 8px 0;
    }
    
    .containerButton {
        margin: 0;
        display: flex;
        
        div {
            
            margin: 0 16px 0 0;
        }
    }
`