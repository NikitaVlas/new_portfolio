import styled from "styled-components";

export const SkillsStyled = styled.div`
    .container {
        display: flex;
        justify-content: space-between;

        .elements {
            width: 100%;
            
            .pseudo {
                &::before {
                    content: "";
                    position: absolute;
                    top: 620px;
                    left: 580px;
                    width: 60px; 
                    height: 60px;
                    background: url('../../../public/img/dotsSmall.svg') no-repeat center center;
                    background-size: cover;
                    z-index: 1; 
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: 640px;
                    left: 360px;
                    width: 50px;
                    height: 50px;
                    background: url('../../../public/img/Rectanglesmall.svg') no-repeat center center;
                    background-size: cover;
                    z-index: 1; 
                }
            }

            &::before {
                content: "";
                position: absolute;
                top: 700px;
                left: 420px;
                width: 120px; 
                height: 120px;
                background: url('../../../public/img/doubleSquad.svg') no-repeat center center;
                background-size: cover; 
                z-index: 1; 
            }
            
            &::after {
                content: "";
                position: absolute;
                top: 790px;
                left: 620px;
                width: 70px; 
                height: 70px;
                background: url('../../../public/img/Rectanglesmall.svg') no-repeat center center;
                background-size: cover; 
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