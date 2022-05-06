import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "styled-components/macro";
import { useNavigate } from "react-router-dom";

function Navbar2() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <nav className="nav-menu">
          <ul>
            <li
              class="listy"
              style={{
                backgroundColor: active === 1 && "#38b000",
                color: active === 1 && "#000",
              }}
              onClick={() => {
                setActive(1);
                navigate("/");
              }}
            >
              <i class="bx bx-home"></i>
              <span class="text">Home</span>
            </li>
            <li
              class="listy"
              style={{
                backgroundColor: active === 2 && "#38b000",
                color: active === 2 && "#000",
              }}
              onClick={() => {
                setActive(2);
                navigate("/portfolio");
              }}
            >
              <i class="bx bx-file-blank"></i>
              <span class="text">Portfolio</span>
            </li>
            <li
              class="listy"
              style={{
                backgroundColor: active === 3 && "#38b000",
                color: active === 3 && "#000",
              }}
              onClick={() => {
                setActive(3);
                navigate("/projects");
              }}
            >
              <i class="bx bx-customize"></i>
              <span class="text">Projects</span>
            </li>
            <li
              class="listy"
              style={{
                backgroundColor: active === 4 && "#38b000",
                color: active === 4 && "#000",
              }}
              onClick={() => {
                setActive(4);
                navigate("/skill");
              }}
            >
              <i class="bx bx-pen"></i>
              <span class="text">Skills</span>
            </li>
            <li
              class="listy"
              style={{
                backgroundColor: active === 5 && "#38b000",
                color: active === 5 && "#000",
              }}
              onClick={() => {
                setActive(5);
                navigate("/about");
              }}
            >
              <i class="bx bx-user"></i>
              <span class="text">About</span>
            </li>
            <li
              class="listy"
              style={{
                backgroundColor: active === 6 && "#38b000",
                color: active === 6 && "#000",
              }}
              onClick={() => {
                setActive(6);
                navigate("/contact");
              }}
            >
              <i class="bx bx-phone"></i>
              <span class="text">Contact</span>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export default Navbar2;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9997;
  transition: all 0.5s;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
  }

  .listy {
    background-color: gray;
    cursor: pointer;
    /* padding: 20px 15px; */
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 20px;
    border: 3px solid #fff;
    font-size: 24px;
    transition: all 0.5s;
  }
  .text {
    display: none;
  }
  .listy:hover {
    color: #000;
    transition: all 0.5s;
    background-color: #fff;
    border: 3px solid #38b000;
    width: 100px;
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 4px;
      color: black !important;
      z-index: 1000;
      transition: all 0.5s;
      font-size: 14px;
    }
  }
`;
export const RadioButton1 = styled.button`
  /* appearance: none; */
  position: relative;
  z-index: 1000;
  border: none;
  background-color: #eef7ff;
  border: 3px solid #38b000;
  line-height: 48px;
  padding: 0px 35px;
  font-size: 15px;
  /* text-transform: uppercase; */
  text-align: center;
  font-weight: 800;
  border-radius: 6px;
  color: #000;
  min-width: 180px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 30px;

    background-color: #38b000;
    transition: all 0.3s ease-in-out;
    transform: scale(0, 1);
    z-index: -1;
  }

  &:hover {
    /* color: #fff; */
    &:before {
      transform: scale(1) !important;
    }
  }
  span {
    margin-left: 5px;
    /* font-size: 17px; */
  }
`;
