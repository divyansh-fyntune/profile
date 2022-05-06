import React, { useState } from "react";
import styled from "styled-components";

const ScrollToTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <Button
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <i className="bx bx-chevrons-up" aria-hidden="true"></i>
    </Button>
  );
};

export default ScrollToTopBtn;

const Button = styled.button`
  width: 35px;
  height: 35px;
  position: fixed;
  justify-content: center;
  bottom: 10px;
  right: 15px;
  z-index: 112;
  text-align: center;
  color: #000;
  font-size: 28px;
  background: #38b000;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    /* left: 5%; */
    height: 10px;
    /* width: 90%; */
    opacity: 1;
    transition: all 0.3s ease-in-out;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;
