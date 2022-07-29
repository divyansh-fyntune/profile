import React from "react";
import styled from "styled-components";
import "styled-components/macro";

import proto from "../assets/images/d1.jpeg";

import proto1 from "../assets/images/d2.jpeg";

import proto2 from "../assets/images/d3.jpeg";

import lc from "../assets/images/lc.png";
import Social from "../Components/Social";
function About() {
  return (
    <div>
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
          <Heading>About Me</Heading>
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
            Description regarding my educational intrests. Here are some key
            points. Visit my Leetcode profile. Connect me on different
            platforms.
          </span>
        </div>
        <div className="container in-down">
          <div
            className="d-flex col-md-12"
            css={`
              display: flex;
              @media (max-width: 991px) {
                display: none !important;
              }
            `}
          >
            <div
              className="col-md-4"
              css={`
                margin: 40px;
                height: 500px;
                width: 350px;
              `}
            >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      css={`
                        height: 600px;

                        /* background-position: center; */
                        background-repeat: no-repeat;
                      `}
                      src={proto2}
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      css={`
                        height: 600px;
                        /* background-position: center; */
                        background-repeat: no-repeat;
                      `}
                      src={proto1}
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      css={`
                        height: 600px;
                        /* background-position: center; */
                        background-repeat: no-repeat;
                      `}
                      src={proto}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  {/* <span class="sr-only">Previous</span> */}
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  {/* <span class="sr-only">Next</span> */}
                </a>
              </div>
            </div>

            <div
              className="col-md-8"
              css={`
                margin: 40px 0px;
              `}
            >
              <h3
                css={`
                  color: gray;
                  font-weight: bold !important;
                  text-decoration: underline;
                `}
              >
                Software Developer
              </h3>
              <p class="mt-4 mb-5">
                I am a Software Developer based in India.
                <br />
                <br />I am currently studying Computer Science Engineering and
                have always had a keen interest in programming and development.
                Since the last two years, I've been really crazy about web or
                full stack development and have created various projects as
                well. I have also been greatful enough to have worked with some
                amazing people during my previous internships or freelance
                projects.
                <br />
                <br />I can't stop learning new things; the more, the better.
                <div>
                  <a href="https://leetcode.com/divyanshbarar/" target="_blank">
                    <Headshot>
                      <img src={lc} alt="lc"></img>
                      <span> My Leetcode Profile</span>
                    </Headshot>
                  </a>
                </div>
              </p>

              <div class="row">
                <div class="col-lg-6">
                  <ul
                    css={`
                      list-style-type: none;

                      font-size: 20px;
                      i {
                        color: #38b000 !important;
                      }
                    `}
                  >
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Birthday:</strong> 21 Jan 2002
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <a href="https://divyanshbarar.vercel.app">
                        www.divyanshbarar.com
                      </a>
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Phone:</strong> +91 9336899943
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>City:</strong> Lucknow, India
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul
                    css={`
                      list-style-type: none;
                      font-size: 20px;
                      i {
                        color: #38b000 !important;
                      }
                    `}
                  >
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Age:</strong> 20
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Degree:</strong> Bachelor of Technology
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Email:</strong> divyanshbarar@gmail.com
                    </li>
                    <li>
                      <i class="bx bx-right-arrow-circle"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            css={`
              display: none;
              @media (max-width: 990px) {
                display: flex;
                flex-direction: column;
              }
            `}
          >
            <h3
              css={`
                color: gray;
                font-weight: bold !important;
                text-decoration: underline;
              `}
            >
              Software Developer
            </h3>
            <p class="mt-4 mb-5">
              I am a Software Developer based in India.
              <br />
              <br />I am currently studying Computer Science Engineering and
              have always had a keen interest in programming and development.
              Since the last two years, I've been really crazy about web or full
              stack development and have created various projects as well. I
              have also been greatful enough to have worked with some amazing
              people during my previous internships or freelance projects.
              <br />
              <br />I can't stop learning new things; the more, the better.
            </p>
            <div>
              <a href="https://leetcode.com/divyanshbarar/" target="_blank">
                <Headshot>
                  <img src={lc} alt="lc"></img>
                  <span> My Leetcode Profile</span>
                </Headshot>
              </a>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <ul
                  css={`
                    list-style-type: none;

                    font-size: 20px;
                    i {
                      color: #38b000 !important;
                    }
                  `}
                >
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Birthday:</strong> 21 Jan 2002
                  </li>
                  {/* <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Website:</strong> <a href="">upcoming</a>
                  </li> */}
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Phone:</strong> +91 9336899943
                  </li>
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>City:</strong> Lucknow, India
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul
                  css={`
                    list-style-type: none;
                    font-size: 20px;
                    i {
                      color: #38b000 !important;
                    }
                  `}
                >
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Age:</strong> 20
                  </li>
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Degree:</strong> Bachelor of Technology
                  </li>
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Email:</strong> divyanshbarar@gmail.com
                  </li>
                  <li>
                    <i class="bx bx-right-arrow-circle"></i>{" "}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Outer>
      <Social />
    </div>
  );
}

export default About;
const Outer = styled.div`
  /* color: #000 !important;
  background-color: #fff !important; */
  min-height: 80vh;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: #fff;
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

const Headshot = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  margin-left: 0px;
  border: 1px dashed gray;
  border-radius: 10px;
  width: 300px;
  justify-content: center;

  img {
    height: 30px;
    background-color: gray;
    border-radius: 100%;
    border: 3px solid #fff;
    margin: 10px;
  }
`;
