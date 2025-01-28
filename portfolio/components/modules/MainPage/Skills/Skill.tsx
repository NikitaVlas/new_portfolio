import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled.tsx";


type SKillProps = {
    skill: string
    title: string
    block?: boolean | undefined
}

const Skill = ({skill, title}: SKillProps) => {
        return (
            <div>
                <SkillStyled >
                    < p className="title">{title}</p>
                    <p>{skill}</p>
                </SkillStyled>
            </div>

        );
    }
;

const SkillStyled = styled.div`
    border: 1px solid ${theme.colors.secondary};
    margin-right: 16px;

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