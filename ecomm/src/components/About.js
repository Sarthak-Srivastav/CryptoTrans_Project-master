import React from "react";
import Navigationbar from "./Navigationbar";
import Footermain from "./Footermain";
import crypt_tradewebsite from "../assets/crypt_tradewebsite1.png";
import "../style/about.css";
import sarthak from "../assets/sarthak.png";
import riya from "../assets/riya.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navigationbar />

      <section class="about">
        <div class="about-text">
          <center>
            <h1 className="display-4">About Us</h1>
            <h5>
              <b> CryptoMart</b>
            </h5>
          </center>
        </div>
        <div class="main">
          <div class="about-image">
            <img src={crypt_tradewebsite}></img>
          </div>

          <div class="para-about">
            <b>
              {" "}
              <p>
                We know that Bitcoin brought blockchain technology to the
                forefront, which was taken by the Ethereum to the next level in
                real world transactions, proving its security and transparency.
                So, Using Web3.0 technology, this website is a Blockchain
                transaction system having multiple other features with a
                stunning design. It's connected to the Ethereum blockchain and
                paired with metamask (for connecting crypto currency wallet with
                the Ethereum blockchain to send crypto through the blockchain
                network).{" "}
              </p>
            </b>
          </div>
        </div>

        <br></br>
        <br></br>
      </section>
      <section class="about-contact">
        <center>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-blue-900 text-3xl font-bold font-mono ">
            If you have any query, click on the button below!!!{" "}
          </p>
          <br></br>
          <Link to="/contactus">
            <button class="homeBtn px-4">Contact us</button>
          </Link>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>

      <section class="about2">
        <br></br>
        <br></br>
        <br></br>
        <div id="about-2">
          <div class="content-box-lg">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <i class="fa fa-book"></i>
                    <h3>MISSION</h3>
                    <br></br>
                    <br></br>
                    <b>
                      {" "}
                      <p>
                        {" "}
                        Our mission is to make people aware of CryptoCurrencies
                        in which they can invest and even they can make that as
                        a payment option in future. People can pay there amount
                        using cryptocurrency on different platforms like
                        ecommerce websites, food delivery apps, etc.{" "}
                      </p>
                    </b>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <i class="fa fa-globe"></i>
                    <h3>VISSION</h3>
                    <br></br>
                    <br></br>
                    <b>
                      {" "}
                      <p>
                        {" "}
                        Our mission is to make people aware of CryptoCurrencies
                        in which they can invest and even they can make that as
                        a payment option in future. People can pay there amount
                        using cryptocurrency on different platforms like
                        ecommerce websites, food delivery apps, etc.{" "}
                      </p>
                    </b>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-item text-center">
                    <i class="fa fa-pencil"></i>
                    <h3>ACHIEVEMENTS</h3>
                    <br></br>
                    <br></br>
                    <b>
                      {" "}
                      <p>
                        {" "}
                        If we talk about our achievements, we are new to this
                        market and trying to make people aware of blockchain
                        system using which they can easily transfer
                        cryptocurrencies, which will act as a payment gateway
                        for them. As we are new in this, we don't have much
                        achievements{" "}
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </section>

      <section class="Team">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h2>
            <b> Our Team</b>
          </h2>
          <b>
            {" "}
            <h6>
              We all are students of Jagan Institute of Management Studies,{" "}
              <br></br> Currently in final year of Bachelors of Computer
              Applications.
            </h6>
          </b>
        </center>
      </section>
      <section class="our-team-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6"></div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={sarthak}></img>
                </div>
                <div class="team-content">
                  <h3 class="title">Sarthak Srivastava</h3>
                  <span class="post">Student @JIMS</span>
                </div>
                <ul class="social">
                  <li>
                    <a
                      href="https://instagram.com/sarthak.xox?igshid=YTQwZjQ0NmI0OA=="
                      class="fa fa-instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/sarthak"
                      class="fa fa-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sarthak-srivastava-11044b271"
                      class="fa fa-linkedin"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={riya}></img>
                </div>
                <div class="team-content">
                  <h3 class="title">Riya Gaba</h3>
                  <span class="post">Student @JIMS</span>
                </div>
                <ul class="social">
                  <li>
                    <a
                      href="https://instagram.com/riya11_06?igshid=YTQwZjQ0NmI0OA=="
                      class="fa fa-instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Riya10714725"
                      class="fa fa-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/riya-gaba-b24b7a22a"
                      class="fa fa-linkedin"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footermain />
    </>
  );
};
const styles = {};

export default About;
