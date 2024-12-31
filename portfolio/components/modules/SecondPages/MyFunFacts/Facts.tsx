import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled";

type FactProps = {
    text: string;
}

const Facts = ({text}: FactProps) => {
    return (
        <FactsStyled>
            {text}
        </FactsStyled>
    );
};

const FactsStyled = styled.div`
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
    margin: 16px 0 16px 0;
    padding: 8px;
`

export default Facts;