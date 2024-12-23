import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled.tsx";


type SKillProps = {
    skill: string
    title: string
}

const Skill = ({skill, title}: SKillProps) => {
    return (
        <SkillStyled>
            <p className="title">{title}</p>
            <p>{skill}</p>
        </SkillStyled>
    );
};

const SkillStyled = styled.div`
    border: 1px solid ${theme.colors.secondary};
    margin-left: 16px;


    .title {
        margin: 0;
        padding: 8px;
        color: ${theme.colors.primary};
        border-bottom: 1px solid ${theme.colors.secondary};
    }

    p {
        margin: 0;
        padding: 8px;
        color: ${theme.colors.secondary};
    }
`

export default Skill;