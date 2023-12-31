import { Component, useState } from "react";
import { Banner } from "./Banner";
export default function App() {
  const [email, setEmail] = useState("");

  var learning = false;
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50 || learning) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  return (
    <>
      <div id="topBar">
        <div id="about_button" className="topLink">
          <a href="#about">About Me</a>
        </div>
        <div className="topLink">
          <a href="#projects">Projects</a>
        </div>
        <div className="topLink">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <Banner />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <h1 id="projects">Projects</h1>
      <div className="projects">
        <a href="https://github.com/Lhafer/2D-Game/" target="_blank">
          <div className="projectWrapper">
            <h1 className="projectTitle">2d Java Game Engine</h1>
            <div className="circleCont">
              <div className="circle">
                <img className="circleImg" src="assets/2d_game_pic.png" />
                <img
                  className="circleImg2"
                  src="assets/2d_game_github_pic.png"
                />
              </div>
            </div>
          </div>
        </a>
        <div className="projectWrapper">
          <a
            id="portLink"
            href="https://github.com/Lhafer/lhafer.github.io/"
            target="_blank"
          >
            <h1 className="projectTitle">This Portfolio Page</h1>
            <div className="circleCont">
              <div className="circle">
                <iframe
                  id="portIframe"
                  src="https://lhafer.github.io/"
                ></iframe>
                <img
                  className="circleImg2"
                  src="assets/portfolio_github_pic.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="projectWrapper">
          <h1 className="projectTitle">Project 3</h1>
          <div className="circleCont">
            <div className="circle"></div>
          </div>
        </div>
        <div className="projectWrapper">
          <h1 className="projectTitle">Project 4</h1>
          <div className="circleCont">
            <div className="circle"></div>
          </div>
        </div>
        <div className="projectWrapper">
          <h1 className="projectTitle">Project 5</h1>
          <div className="circleCont">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="contact_and_pic">
          <img src="assets/portrait.jpg" id="headShot" />
          <div className="contact">
            <dl>
              <dt>Phone Number</dt>
              <dd>386-517-3332</dd>

              <dt>Email</dt>
              <dd>cbtfan123@gmail.com</dd>

              <dt>Location</dt>
              <dd>FL, USA</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="box"></div>
    </>
  );
}
