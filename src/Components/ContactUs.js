import React from "react";
import styled from "styled-components";
function ContactUS() {
  return (
    <div style={{ marginLeft: "15px" }}>
      <RadioButton>
        Send Message
        {/* <i class='bx bx-send bx-fade-left bx-rotate-270' ></i> */}
        <span class="bx bx-send bx-flashing bx-rotate-0"></span>
      </RadioButton>
    </div>
  );
}

export const RadioButton = styled.button`
  appearance: none;
  position: relative;
  z-index: 1;
  border: none;
  background-color: #eef7ff;
  border: 2px solid #38b000;
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

export default ContactUS;
