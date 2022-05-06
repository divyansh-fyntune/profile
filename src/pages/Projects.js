import React, { useEffect } from "react";
import styled from "styled-components";
import "styled-components/macro";
import proto from "../assets/images/mount2.jpg";
import ScrollToTopBtn from "../Components/ScrollToTopBtn";
import Social from "../Components/Social";
import { demoschema } from "./schema.js";
function Projects() {
  // console.log(demoschema);
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
          <Heading>My Projects</Heading>
          <span
            css={`
              @media (max-width: 768px) {
                width: 400px;
                text-align: center;
                margin-bottom: 10px;
              }

              @media (max-width: 410px) {
                width: 320px;
                font-size: 13px;
                text-align: center;
                margin-bottom: 10px;
              }
            `}
          >
            Hover on my works to visit them. Unless explicitly stated otherwise,
            all their back-end and front-end parts were completely done by me.
          </span>
        </div>
        <div className="container in-down">
          <div
            className="col-md-12"
            css={`
              display: flex;
              justify-content: space-evenly;
              flex-wrap: wrap;
            `}
          >
            {demoschema.map((item) => {
              return (
                <>
                  <Box>
                    <div
                      css={`
                        height: 300px;
                        background-image: url(${item.image});
                        background-position: center;
                        background-size: cover;
                        /* border-bottom: 2px solid #000; */
                      `}
                    >
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          height: 270px;
                          width: 400px;
                          font-size: 59px;
                          opacity: 0;
                          transition: all 0.5s ease-in;
                          &:hover {
                            transition: all 0.5s ease-in;
                            opacity: 1;
                            background-color: rgba(255, 255, 255, 0.5);
                          }
                          /* &::before {
                            display: block;
                            content: "";
                            width: 48px;
                            height: 48px;
                            position: absolute;
                            top: 35px;
                            left: 45px;
                            border-top: 2px solid #000;
                            border-left: 2px solid #000;
                            transition: all 0.5s ease 0s;
                            z-index: 9994;
                          } */
                        `}
                      >
                        <a href={item.link} target="_blank">
                          <i class="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      css={`
                        height: 150px;
                        padding: 10px;

                        @media (max-width: 451px) {
                          padding-left: 30px;
                        }
                      `}
                    >
                      <a href={item.link} target="_blank">
                        <h3> {item.name}</h3>
                      </a>

                      <Feature>{item.tech}</Feature>

                      <span
                        css={`
                          margin: 5px;
                        `}
                      >
                        {item.description}
                      </span>
                    </div>
                  </Box>
                </>
              );
            })}
          </div>
        </div>
        <Social />
      </Outer>
    </div>
  );
}

export default Projects;
const Outer = styled.div`
  /* color: #000 !important;
  background-color: #fff !important; */
  min-height: 90vh;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 991px) {
    margin-top: 80px;
  }
`;

const Heading = styled.h1`
  display: flex;
  font-size: 50px;
  justify-content: center;
  /* margin-bottom: 30px; */
  @media (max-width: 991px) {
    font-size: 38px;
  }
`;

const Box = styled.div`
  height: 410px;
  width: 400px;
  border-radius: 10px;
  /* padding: 15px; */
  background-color: white;
  display: flex;
  flex-direction: column;
  color: black;
  /* cursor: pointer; */
  margin: 20px 0px;
  box-shadow: rgba(255, 255, 255, 0.2) 8px 10px 15px;
  transition: all 0.5s ease-in;
  &:hover {
    transition: all 0.5s ease-in;
  }
`;

const Feature = styled.div`
  background-color: rgba(255, 0, 0, 0.9);
  font-size: 18px;
  color: white;
  width: fit-content;
  padding: 2px 10px;
  margin-bottom: 5px;
  border-radius: 30px;
`;
