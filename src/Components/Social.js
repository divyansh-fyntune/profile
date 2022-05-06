import React from "react";
import styled from "styled-components";
import "styled-components/macro";

function Social() {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          margin-top: 30px;
          font-style: italic;
        }
      `}
      className="in-down3"
    >
      <Box>
        <a
          href="https://www.instagram.com/_divyansh.exe/?hl=en"
          target="_blank"
        >
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/divyansh-barar-76b996192/"
          target="_blank"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/divyanshbarar" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=919336899943&text=Hi Divyansh,want to connect with you !! `}
          target="_blank"
        >
          <i class="bx bxl-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/divyansh.barar.3/" target="_blank">
          <i class="bx bxl-facebook"></i>
        </a>
      </Box>

      <p>Thanks for visiting</p>
    </div>
  );
}

export default Social;

const Box = styled.div`
  display: flex;
  i {
    background-color: #38b000;
    cursor: pointer;
    color: black;
    /* padding: 20px 15px; */
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 10px 7px;
    /* border: 3px solid #fff; */
    font-size: 30px;
    transition: all 0.5s;

    &:hover {
      background-color: #fff;
      transition: all 0.5s;
    }
  }
  a {
    text-decoration: none;
  }
`;
