import React, { useEffect } from "react";
import styled from "styled-components";
import "styled-components/macro";
import pic1 from "../assets/images/Fyntune.png";
import pic2 from "../assets/images/Hobnob.png";
import { RadioButton1 } from "../Components/Navbar2";
import ScrollToTopBtn from "../Components/ScrollToTopBtn";
import Social from "../Components/Social";
import down from "../assets/images/Divyansh_Barar-Resume.pdf";
function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <ScrollToTopBtn />
      <Outer>
        <div class="in-leftt">
          <Text>
            <h1
              css={`
                font-size: 50px;
                font-weight: bold;
                @media (max-width: 991px) {
                  font-size: 38px;
                }
              `}
            >
              My Portfolio
            </h1>
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
              See my works below. My coding journey in the industry. Click on
              the link to see it. Dowload my Resume.
            </span>
          </Text>
        </div>
        <div class="container in-down ">
          <Inner>
            <ul>
              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 0px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;

                    &::after {
                      content: " ";
                      position: relative;
                      top: -30px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      margin-right: 2px;
                      text-align: right !important;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2022
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    padding: 0px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>
                    Currently open to co-operation on new and existing projects.
                  </h3>

                  <p>
                    Looking for a SDE role or a just full-stack dev willing to
                    join your team?
                    <br />
                    Contact me. I will answer you in ~48 hours.{" "}
                  </p>
                  <div
                    css={`
                      margin: 10px;
                      @media (max-width: 512px) {
                        display: none;
                      }
                    `}
                  >
                    <a href={down} download>
                      <RadioButton1>
                        Resume
                        <span> </span>
                        <i class="bx bxs-download bx-fade-up"></i>
                      </RadioButton1>
                    </a>
                  </div>
                </div>
              </li>
              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 20px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;
                    &::after {
                      content: " ";
                      position: relative;
                      top: -20px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      text-align: right !important;
                      margin-right: 2px;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2022
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    margin-top: 20px;
                    padding: 0px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>Intern as React Js Developer at Fyntune Pvt.</h3>

                  <span
                    css={`
                      font-size: 16px;
                      font-style: italic;
                      color: gray;
                    `}
                  >
                    June 2022 to December 2022
                    <br />6 months.
                  </span>
                  <div
                    css={`
                      display: flex;
                    `}
                  >
                    <div className="col-md-8">
                      <p>
                        Worked as Frontend Developer in the insurance industry.
                        <br />
                        <ul>
                          <li>
                            Worked on Aditya Birla Health Insurance.
                            <a href="https://health.fynity.in/" target="_blank">
                              See here
                            </a>
                          </li>
                          <li>
                            Build the Mahindra Pet Insurance from Scratch
                            {"(Pay Bima)"}.
                            <a href="https://pet.fynity.in/" target="_blank">
                              See here
                            </a>
                          </li>
                          <li>
                            Worked on Robin Hood Health Insurance.
                            <a
                              href="https://robinhood-health.fynity.in/"
                              target="_blank"
                            >
                              See here
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            And worked on many more including Term Inusurance.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <a href={pic1} download>
                        <Fyntune src={pic1} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 20px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;
                    &::after {
                      content: " ";
                      position: relative;
                      top: -20px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      text-align: right !important;
                      margin-right: 2px;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2021
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    margin-top: 20px;
                    padding: 0px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>Intern as Django Developer at Hobnob LLP.</h3>

                  <span
                    css={`
                      font-size: 16px;
                      font-style: italic;
                      color: gray;
                    `}
                  >
                    December 2021 to January 2021
                    <br />2 months.
                  </span>
                  <div
                    css={`
                      display: flex;
                    `}
                  >
                    <div className="col-md-8">
                      <p
                        css={`
                          margin-right: 10px;
                        `}
                      >
                        Worked as Backend Developer in the Social Media
                        industry.
                        <br />
                        Hobnob is a startup which focuses on building an
                        evironment for influencer to sign in and get offers as
                        promos and ads.
                        <br />
                        I have worked on the influencer payment part. <br />
                        Notably I did work on Customer-Relationship part.{" "}
                      </p>{" "}
                    </div>
                    <div className="col-md-4">
                      <a href={pic2} download>
                        <Fyntune src={pic2} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 20px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;
                    &::after {
                      content: " ";
                      position: relative;
                      top: -20px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      text-align: right !important;
                      margin-right: 2px;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2019
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    padding: 20px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>Journey of Bachelor of Technology</h3>
                  <span
                    css={`
                      font-size: 16px;
                      font-style: italic;
                      color: gray;
                    `}
                  >
                    August 2019 to July 2023
                    <br />4 years.
                  </span>
                  <br />
                  <span>Branch: CSE</span>
                  <br />
                  <span>CGPA: 8.5</span>
                  <br />
                  <span>Completing my B.tech at BBDITM,Lucknow.</span>
                </div>
              </li>
              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 20px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;
                    &::after {
                      content: " ";
                      position: relative;
                      top: -20px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      text-align: right !important;
                      margin-right: 2px;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2019
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    padding: 20px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>Completed my 12th(XII)-ISC</h3>
                  <span
                    css={`
                      font-size: 16px;
                      font-style: italic;
                      color: gray;
                    `}
                  >
                    May 2019
                  </span>
                  <br />
                  <span>Percetage: 91%</span>
                  <br />
                  <span>Nirmala Convent Inter College</span>
                  <br />
                  <span>Lucknow, Uttar Pradesh.</span>
                </div>
              </li>

              <li
                css={`
                  display: flex;
                `}
              >
                <div
                  css={`
                    /* margin-top: 10px; */
                    width: 100px;
                    @media (max-width: 412px) {
                      width: 40px;
                    }
                    padding: 20px 0px;
                    padding-bottom: 20px;
                    border-right: 1px solid gray;
                    &::after {
                      content: " ";
                      position: relative;
                      top: -20px;
                      right: -82px;
                      border-radius: 50px;
                      display: block;
                      z-index: 1000;
                      width: 15px;
                      height: 15px;
                      background-color: #38b000;
                      @media (max-width: 991px) {
                        right: -75px;
                      }
                      @media (max-width: 767px) {
                        right: -69px;
                      }
                      @media (max-width: 512px) {
                        display: none;
                      }
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fff;
                      font-style: italic;
                      text-align: right !important;
                      margin-right: 2px;
                      @media (max-width: 412px) {
                        font-size: 12px !important;
                        margin-right: 9px !important;
                      }
                      &:hover {
                        color: #38b000;
                      }
                    `}
                  >
                    2017
                  </span>
                </div>
                <div
                  css={`
                    margin-left: 20px;
                    padding: 20px 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid gray;
                    width: 100%;
                  `}
                >
                  <h3>Completed my 10th(X)-ICSE</h3>
                  <span
                    css={`
                      font-size: 16px;
                      font-style: italic;
                      color: gray;
                    `}
                  >
                    May 2017
                  </span>
                  <br />
                  <span>Percetage: 89%</span>
                  <br />
                  <span>Nirmala Convent Inter College</span>
                  <br />
                  <span>Lucknow, Uttar Pradesh.</span>
                </div>
              </li>
            </ul>
          </Inner>
        </div>
        <Social />
      </Outer>
    </div>
  );
}

export default Portfolio;
const Outer = styled.div`
  /* color: #000 !important; */
  /* background-color: #fff !important; */
  min-height: 95vh;
  margin-top: 30px;
  @media (max-width: 991px) {
    margin-top: 80px;
  }
  h3 {
    @media (max-width: 767px) {
      font-size: 17px;
    }
  }
  p {
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
  span {
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`;
const Text = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-bottom: 1px solid #000; */
`;

const Inner = styled.div`
  padding: 40px;
  /* border: 1px solid #000; */
  font-size: 20px;

  @media (max-width: 991px) {
    padding: 8px;
  }
`;

const Fyntune = styled.img`
  height: 400px;
  margin-top: -100px;
  /* position: relative; */
  /* top: -100px; */
  border: 3px solid #000;

  @media (max-width: 1199px) {
    display: none;
  }
`;
