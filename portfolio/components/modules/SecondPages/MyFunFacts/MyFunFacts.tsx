import Facts from "./Facts";
import styled from "styled-components";
import BlockTitle from "../../../elements/BlockTitle/BlockTitle.tsx";

const MyFunFacts = () => {
    return (
        <MyFunFactsStyled>
            <BlockTitle text={"my-fun-facts"}/>
            <div className="containerMyFunFacts">
                <div>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I like pizza and pelmeni"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                    <Facts text={"I was in Russia, Germany, Italy, Spain, Belgium, Netherlands and France"}/>
                </div>
                <div></div>
            </div>

        </MyFunFactsStyled>
    );
};

const MyFunFactsStyled = styled.div`
    margin: 20px 0 20px 0;

    
    .containerMyFunFacts {
        display: flex;
        justify-content: space-between;
    }

`

export default MyFunFacts;