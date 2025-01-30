import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";


type BlockTitleProps = {
    text: string
    span: string
    img: boolean
}
const BlockTitle = ({text, span, img}: BlockTitleProps) => {
    return (
        <BlockTitleStyle>
            <h3><span>{span}</span>{text}</h3>
            {img ? <img src="../../../src/assets/img/Line.svg" alt=""/> : ""}
        </BlockTitleStyle>
    );
};

const BlockTitleStyle = styled.div`
    display: flex;
    
    h3 {
        font-size: ${theme.fontsize.h3};
    }
    
    span {
        padding-right: 3px;
        color: ${theme.hoverColor.hover}
    }
    
    img {
        margin-left: 16px;
    }
`

export default BlockTitle;