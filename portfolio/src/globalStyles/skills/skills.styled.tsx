import styled from "styled-components";

export const SkillsStyled = styled.div`
    .container {
        display: flex;
        justify-content: space-between;

        .elements {
            position: relative;
            width: 100%;

            .dotsSmall {
                position: absolute;
                top: 110px;
                left: 220px;
                width: 60px;
                height: 60px;
                z-index: 1;
            }
            
            .rectangleSmall {
                position: absolute;
                top: 12px;
                left: 320px;
                width: 50px;
                height: 50px;
                z-index: 1;
            }
            
            .doubleSquad {
                position: absolute;
                top: 90px;
                left: 50px;
                width: 120px;
                height: 120px;
                z-index: 1;
            }
            
            .rectangleSmall2 {
                position: absolute;
                //top: 70px;
                left: 10px;
                width: 70px;
                height: 70px;
                z-index: 1;
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