import React from "react";
import styled from "styled-components";
import "styled-components/macro";
import ContactUS from "../Components/ContactUs";
import Social from "../Components/Social";
function Contact() {
  return (
    <div>
      {" "}
      <Outer>
        <div
          className="in-leftt"
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            @media (max-width: 500px) {
              margin-bottom: 10px;
            }
          `}
        >
          <Heading>Contact Me</Heading>
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
            Send an e-mail. Write a form to me. Connect with me on the platforms
            below I will try my best to reply you in ~24 hours.
          </span>
        </div>
        <div className="container in-down">
          <div class="row mt-1">
            <div class="col-lg-4">
              <div class="info">
                <a href="mailto:divyanshbarar@gmail.com" target="_blank">
                  <div class="email">
                    <i className="bx bx-chat"></i>
                    <h4>Email:</h4>
                    <p>divyanshbarar@gmail.com</p>
                  </div>
                </a>

                <div class="phone">
                  <i class="bx bx-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9336899943</p>
                </div>
              </div>
            </div>
            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                action="https://formspree.io/f/mpzbrqoj"
                method="POST"
                role="form"
                class="php-email-form"
              >
                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <ContactUS type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Outer>
      <Social />
    </div>
  );
}

export default Contact;

const Outer = styled.div`
  /* color: #000 !important;
  background-color: #fff !important; */
  min-height: 60vh;
  margin-top: 30px;
  @media (max-width: 991px) {
    margin-top: 80px;
  }
  i {
    font-size: 20px;
    color: black;
    float: left;
    width: 44px;
    height: 44px;
    background: #eef7ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    margin: 10px;
  }
  .email {
    &:hover {
      i {
        background-color: #38b000;
      }
    }
  }
  .phone {
    &:hover {
      i {
        background-color: #38b000;
      }
    }
  }
  .form-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -5px;
    margin-left: -5px; */
  }
  .form-group {
    padding: 0px 5px;
    padding-bottom: 8px;
  }
  .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }
  .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }
  .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  display: flex;
  font-size: 50px;
  justify-content: center;
  @media (max-width: 991px) {
    font-size: 38px;
  }
  /* margin-bottom: 30px; */
`;
