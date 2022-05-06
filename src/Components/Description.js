import React from "react";
import styled from "styled-components";
import "styled-components/macro";
// import Social from "./Social";

function Description() {
  return (
    <div class="in-left">
      <Outer>
        <Text>Not Your Average Software Engineer</Text>
        <Text1>Get ready to turn your ideas into reality</Text1>
      </Outer>
    </div>
  );
}

export default Description;
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  overflow: hidden;
`;

const Text = styled.div`
  font-size: 5vw;
  /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
`;
const Text1 = styled.div`
  font-size: 2vw;
  @media (max-width: 560px) {
    font-size: 14px;
  }
  /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
`;
