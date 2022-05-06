import React, { useState } from "react";
import styled from "styled-components";
import "styled-components/macro";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  console.log(active, "www");
  return (
    <Outer>
      <Link
        style={{ color: active === 1 && "#38b000" }}
        onClick={() => {
          setActive(1);
          navigate("/");
        }}
      >
        Home
      </Link>
      <Link
        style={{ color: active === 2 && "#38b000" }}
        onClick={() => {
          setActive(2);
          navigate("/portfolio");
        }}
      >
        Portfolio
      </Link>
      <Link
        style={{ color: active === 3 && "#38b000" }}
        onClick={() => {
          setActive(3);
          navigate("/projects");
        }}
      >
        Projects
      </Link>
      <Link
        style={{ color: active === 4 && "#38b000" }}
        onClick={() => {
          setActive(4);
          navigate("/about");
        }}
      >
        About
      </Link>
      <Link
        style={{ color: active === 5 && "#38b000" }}
        onClick={() => {
          setActive(5);
          navigate("/contact");
        }}
      >
        Contact Me
      </Link>
    </Outer>
  );
}

export default Navbar;

const Link = styled.div`
  font-size: 19px;
  /* text-decoration: underline; */
  cursor: pointer;
  margin: 0 20px;
  font-weight: bold;

  @media (max-width: 590px) {
    font-size: 14px;
    margin: 0 15px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
    margin: 0 8px;
  }

  @media (max-width: 355px) {
    font-size: 12px;
  }
`;

const Outer = styled.div`
  padding: 25px 35px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;

  @media (max-width: 630px) {
    padding: 12px 15px;
  }
`;
