import React from "react";
import styled from "styled-components";
import "styled-components/macro";
import mount from "../assets/images/mount5.jpg";
import pic from "../assets/images/div1.png";
// import { RadioButton1 } from "./Navbar2";

function Intro() {
  return (
    <div css={``}>
      <Outer>
        <Inner>
          <Left>
            <p
              className="in-down"
              css={`
                display: none;
                @media (max-width: 559px) {
                  display: flex;
                  text-align: center;
                  justify-content: center;
                  margin-top: 20px;
                  font-size: 26px;
                }
              `}
            >
              Hi, my name is Divyansh Barar.
            </p>
            <Text>
              <span class="typing-demo">
                <span
                  css={`
                    font-size: 8vw;
                  `}
                >
                  Hi
                </span>{" "}
                <span>my name is</span>{" "}
                <span
                  css={`
                    font-size: 4vw;
                  `}
                >
                  Divyansh Barar.
                </span>
              </span>
            </Text>
          </Left>
          <Right>
            <Divyansh className="avatar" src={pic} />
          </Right>
        </Inner>
      </Outer>
    </div>
  );
}

export default Intro;

const Outer = styled.div`
  height: 45vh;
  margin-top: 80px;
  background-image: url(${mount});
  background-size: cover;
  background-position: center center;
`;

const Inner = styled.div`
  height: 45vh;
  display: flex;
  @media (max-width: 810px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
const Left = styled.div`
  width: 70vw;
  @media (max-width: 560px) {
    width: 100vw;
  }
  height: inherit;
  color: #fff;
  /* border-right: 2px solid #fff; */
`;

const Right = styled.div`
  width: 30vw;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3vw;
  @media (max-width: 560px) {
    display: none;
  }
`;

const Divyansh = styled.img`
  height: 16vw;
  cursor: pointer;
  border: 5px solid #fff;
  border-radius: 250px;
  transition: all 0.5s ease-in;

  -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
  filter: grayscale(80%);
  &:hover {
    /* transition: all 0.5s ease-out;
    scale: 1.1; */
    transition: all 0.5s ease-in;
    height: 17vw;
    border-color: #0a87ff;

    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
  @media (max-width: 810px) {
    height: 200px;
    &:hover {
      height: 220px;
    }
  }
`;
