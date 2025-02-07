import Facts from "./Facts";
import styled from "styled-components";
import BlockTitle from "../../../elements/BlockTitle/BlockTitle.tsx";
import dotsSmall from "../../../../src/assets/dotsSmall.svg";
import rectangleSmall from "../../../../src/assets/Rectanglesmall.svg";
import doubleSquad from "../../../../src/assets/doubleSquad.svg";
import rectangleSmall2 from "../../../../src/assets/Rectanglesmall.svg";

const MyFunFacts = () => {
    return (
        <MyFunFactsStyled>
            <BlockTitle text={"my-fun-facts"} span={"#"} img={false}/>
            <div className="containerMyFunFacts">
                <div>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I like pizza and pelmeni"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                </div>
                <div className="elements">
                    <img className="dotsSmall" src={dotsSmall} alt=""/>
                    <img className="rectangleSmall" src={rectangleSmall} alt=""/>
                    <img className="doubleSquad" src={doubleSquad} alt=""/>
                    <img className="rectangleSmall2" src={rectangleSmall2} alt=""/>
                </div>
            </div>

        </MyFunFactsStyled>
    );
};

const MyFunFactsStyled = styled.div`
    margin: 20px 0 20px 0;


    .containerMyFunFacts {
        display: flex;
        justify-content: space-between;
        
        .elements {
            .dotsSmall {
                position: absolute;
                top: 900px;
                left: 1080px;
                width: 60px;
                height: 60px;
                z-index: 1;
            }
            
            .rectangleSmall {
                position: absolute;
                top: 1100px;
                left: 980px;
                width: 50px;
                height: 50px;
                z-index: 1;
            }

            .doubleSquad {
                position: absolute;
                top: 1000px;
                left: 1180px;
                width: 120px;
                height: 120px;
                z-index: 1;
            }

            .rectangleSmall2 {
                position: absolute;
                top: 990px;
                left: 1020px;
                width: 70px;
                height: 70px;
                z-index: 1;
            }
        }
    }
`

export default MyFunFacts;