import styled from "styled-components";

export const SkillsStyled = styled.div`
    .container {
        display: flex;
        justify-content: space-between;

        .elements {
            margin-right: 60px;
            
            .doubleSquad::before {
                display: inline-block;
            }
        }

        .skillsContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(100px, auto); 

            :nth-child(4) {
                grid-column: 2 / 3; 
            }

            :nth-child(5) {
                grid-column: 3 / 4; 
            }
        }
    }

    .containerAboutPage {
        .skillsContainer {
            display: flex;
            justify-content: space-between;
        }
    }

`