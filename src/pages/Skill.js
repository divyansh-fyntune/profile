import React, { useEffect } from "react";
import styled from "styled-components";
import "styled-components/macro";

import mern from "../assets/images/mern.png";
import react from "../assets/images/React1.webp";
import node from "../assets/images/node.png";
import dj from "../assets/images/dj.png";
import tc from "../assets/images/tc.png";
import spring from "../assets/images/spring.png";

import mongo from "../assets/images/mongo.png";
import c from "../assets/images/c.png";
import java from "../assets/images/java.png";
import py from "../assets/images/py.png";
import gt from "../assets/images/git.png";
import pm from "../assets/images/pm.png";
import redux from "../assets/images/redux.png";

import fire from "../assets/images/fb.png";
import vs from "../assets/images/vs.png";
import mysql from "../assets/images/mysql.png";
import html from "../assets/images/html.png";
import ScrollToTopBtn from "../Components/ScrollToTopBtn";
import Social from "../Components/Social";
function Skill() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <ScrollToTopBtn />
      <Outer>
        <div
          className="in-leftt"
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
          `}
        >
          <Heading>My Skills</Heading>
          <span>
            Scroll down to see my skills and tools preffered. Click on the icon
            to know the detailed version of my skills.
          </span>
        </div>
        <div
          className="container in-down "
          css={`
            min-height: 550px;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            align-items: center;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 20px;
              padding: 20px;
              border-bottom: 1px solid gray;
            `}
          >
            <h2>Specialization</h2>
            <a href="https://www.mongodb.com/mern-stack" target="_blank">
              <img
                src={mern}
                alt=""
                css={`
                  height: 200px;
                `}
              />
            </a>
          </div>
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 40px;
              padding: 20px;
              border-bottom: 1px solid gray;
            `}
          >
            <h2>Front-end</h2>
            <div
              css={`
                display: flex;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                padding: 20px;
              `}
            >
              <a href="https://reactjs.org/" target="_blank">
                <img
                  src={react}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>

              <a href="https://tailwindcss.com/" target="_blank">
                <img
                  src={tc}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>
            </div>
            <a
              href="https://docs.microsoft.com/en-us/learn/modules/build-simple-website/"
              target="_blank"
            >
              <img
                src={html}
                alt=""
                css={`
                  height: 200px;
                `}
              />
            </a>
          </div>
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 20px;
              padding: 20px;
              border-bottom: 1px solid gray;
            `}
          >
            <h2>Back-end</h2>
            {/* <img
              src={html}
              alt=""
              css={`
                height: 200px;
              `}
            /> */}
            <div
              css={`
                display: flex;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
              `}
            >
              <a href="https://nodejs.org/en/docs/" target="_blank">
                <img
                  src={node}
                  alt=""
                  css={`
                    height: 180px;
                    margin: 0px 20px;
                  `}
                />
              </a>

              <a href="https://docs.djangoproject.com/en/4.0/" target="_blank">
                <img
                  src={dj}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>

              <a href="https://spring.io/quickstart" target="_blank">
                <img
                  src={spring}
                  alt=""
                  css={`
                  height: 180px;
                  v
                `}
                />
              </a>
            </div>
            <div
              css={`
                display: flex;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
              `}
            >
              <a href="https://docs.mongodb.com/" target="_blank">
                <img
                  src={mongo}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>

              <a href="https://dev.mysql.com/doc/" target="_blank">
                <img
                  src={mysql}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>
            </div>
          </div>
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 20px;
              padding: 20px;
              border-bottom: 1px solid gray;
              margin-top: 60px;
            `}
          >
            <h2>Languages</h2>
            {/* <img
              src={html}
              alt=""
              css={`
                height: 200px;
              `}
            /> */}
            <div
              css={`
                display: flex;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
              `}
            >
              <a
                href="https://www.geeksforgeeks.org/c-plus-plus/"
                target="_blank"
              >
                <img
                  src={c}
                  alt=""
                  css={`
                    height: 180px;
                    margin: 0px 20px;
                  `}
                />
              </a>

              <a href="https://www.geeksforgeeks.org/java/" target="_blank">
                <img
                  src={java}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>

              <a href="https://docs.python.org/3/" target="_blank">
                <img
                  src={py}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>
            </div>
          </div>
          <div
            css={`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 20px;

              border-bottom: 1px solid gray;
              margin: 80px 0px;
            `}
          >
            <h2>Tools</h2>
            {/* <img
              src={html}
              alt=""
              css={`
                height: 200px;
              `}
            /> */}
            <div
              css={`
                display: flex;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
              `}
            >
              <a href="https://docs.github.com/en/get-started" target="_blank">
                <img
                  src={gt}
                  alt=""
                  css={`
                    height: 180px;
                    margin: 0px 20px;
                  `}
                />
              </a>

              <a
                href="https://www.postman.com/product/what-is-postman/"
                target="_blank"
              >
                <img
                  src={pm}
                  alt=""
                  css={`
                    height: 180px;
                    margin-right: 20px;
                  `}
                />
              </a>

              <a href="https://code.visualstudio.com/" target="_blank">
                <img
                  src={vs}
                  alt=""
                  css={`
                    height: 170px;
                    margin-right: 20px;
                  `}
                />
              </a>

              <a href="https://redux.js.org/" target="_blank">
                <img
                  src={redux}
                  alt=""
                  css={`
                    height: 170px;
                    margin-right: 20px;
                  `}
                />
              </a>

              <a href="https://firebase.google.com/docs" target="_blank">
                <img
                  src={fire}
                  alt=""
                  css={`
                    height: 180px;
                  `}
                />
              </a>
            </div>
          </div>
        </div>
        <Social />
      </Outer>
    </div>
  );
}

export default Skill;
const Outer = styled.div`
  /* color: #000 !important;
  background-color: #fff !important; */
  min-height: 90vh;
  margin-top: 30px;
  .skill {
    padding: 10px 0;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
  h2 {
    text-decoration: underline;
  }
  img {
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.1;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const Heading = styled.h1`
  display: flex;
  font-size: 50px;
  justify-content: center;
  /* margin-bottom: 30px; */
`;
