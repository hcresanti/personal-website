import React from "react";
import "./main.css";
import MatterComp from "./matter.js";

const reactChatImg = "https://lh4.googleusercontent.com/I0Ck6HnxmAQW39WjTvQvhoLwOPgHigAuD2aQP8f5J0O_RZMgNk-73D7kQZK2scsiwQLXJKnl_XL9x7TNqvKDfIBRZb-bB9brgatfEB8TnciV12aUNSYpYzWrRvfdegT-=w1280"
const golImg = "https://lh6.googleusercontent.com/XnsBE_2fYGWU64GOtur7Vgs_fDUhOLFzg8uKVGaWl9yD3otsS5JgNaOpXbn-Fasx4aNLotNJR-IZf9c_Uwr1wUgIlQCIt0xH9SYE1XqoZnfuoMkgm48yMKj9BfPbL5cXsw=w1280"
const ricoShooterImg = "https://lh6.googleusercontent.com/UMsr8U0Jp-SJdpk1jUTsvfBqmWzN49WLEW0J85-uHlyls-HlVViwo-GP7ZgXT9hZZvqII3niTNGxWuNGg9BflCcC2y9anKUB_WS_Dt0sku7JQNZvqeO_ZbynQJcSNzL7Wg=w1280"
const clScannerImg = "https://lh6.googleusercontent.com/M1PNY4La28LRdlyQqJZlXrhWetApvLwHL5VjV3ToW6KFjhjV7fv_dqcrYChn7IV1EypBuo-cBSHpkwa4_ye6juDmJKteIZ65ohiGjWCxMnJLq4YBZPKfORI4ifq7o9rkwQ=w1280"
const minecraftImg = "https://lh6.googleusercontent.com/ykKkh7LFGxjKtlruJVuXDG6MOLx2d32APCyjNCw8HC3b-KXUlOcRWNflVVbiF-HEnrgEytnGfo2mzvdl3Ml2eyb8THvp8ZfJ0rBJdtFGXXlnWu2LK-nkQ345nq8r8UdSBA=w1280"

function App() {

  return (
    <div className="background">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>

      {/* <div className="sidebar">
        <label>👨‍💻</label>
      </div> */}

      <div className="main">

      <MatterComp/>

        <div className="name sub">
          hello! my name is
        </div>

        <div className="name">
          Hayden Cresanti
        </div>

        <div className="text-header">
          I'm a Software Engineer
        </div>

        <div className="text-body">
          In 2021 I graduated from the University of Maryland, College Park 
          I received a Bachelor's Degree in Computer Science with a minor in Philosophy
        </div>

        <div className="name sub">
          my skills
        </div>

        { section(skillSection()) }

        <div className="name sub">
          my projects
        </div>

        <div className="section-container">
          { projectSection(reactChatSection()) }
          { projectSection(minecraftSection()) }
          { projectSection(golSection()) }
          { projectSection(clScannerSection()) }
          { projectSection(ricoShooterSection()) }
        </div>

        <div className="name sub">
          my hobbies
        </div>

        { section(hobbySection()) }

        <div className="name sub">
          my art
        </div>

        { section(artSection()) }
      </div>
    </div>
  );
}



// TEMPLATES

function section(innerBits) {
  return (
    <div className="section">
      { innerBits }
    </div>
  );
}

function projectSection(innerBits) {
  return (
    <div className="section project">
      { innerBits }
    </div>
  );
}

function projectTemplate(languageIcon, imgLink, headerText, bodyText) {
  return (
    <>
      <label className="project-icon">
        <i class={languageIcon + " project-language-icon"}></i>
      </label>
      <div>
        <img className="project-img" src={imgLink}/>
      </div>
      <div className="text-header">
        {headerText}
      </div>
      <div className="text-body">
        {bodyText}
      </div>
    </>
  );
}



// CONTENT 

function skillSection() {
  return (
    <>
      <div className="text-header">Languages</div>
      <div class="skill-grid">
        <i class="devicon-java-plain skill-icon" title="Java"></i>
        <i class="devicon-python-plain skill-icon" title="Python"></i>
        <i class="devicon-csharp-plain skill-icon" title="C#"></i>
        <i class="devicon-javascript-plain skill-icon" title="JavaScript"></i>
        <i class="devicon-html5-plain skill-icon" title="HTML"></i>
        <i class="devicon-css3-plain skill-icon" title="CSS"></i>
        <i class="devicon-swift-plain skill-icon" title="Swift"></i>
      </div>

      <div className="text-header">Frameworks + Libraries</div>
      <div class="skill-grid">
        <i class="devicon-react-original skill-icon" title="React"></i>
        <i class="devicon-nodejs-plain skill-icon" title="Node.JS"></i>
        <i class="devicon-express-original skill-icon" title="Express"></i>
        <i class="devicon-mysql-plain skill-icon" title="MySQL"></i>
        <i class="devicon-spring-plain skill-icon" title="Spring"></i>
        <i class="devicon-selenium-original skill-icon" title="Selenium"></i>
        <i class="devicon-dotnetcore-plain skill-icon" title=".NET Core"></i>
      </div>

      <div className="text-header">Developer Tools</div>
      <div class="skill-grid">
        <i class="devicon-git-plain skill-icon" title="Git"></i>
        <i class="devicon-unity-original skill-icon" title="Unity "></i>
        <i class="devicon-visualstudio-plain skill-icon" title="Visual Studio"></i>
        <i class="devicon-jenkins-line skill-icon" title="Jenkins"></i>
        <i class="devicon-docker-plain skill-icon" title="Docker"></i>
        <i class="devicon-figma-plain skill-icon" title="Figma"></i>
        <i class="devicon-npm-original-wordmark skill-icon" title="NPM"></i>
      </div>
    </>
  );
}

function hobbySection() {
  return (
    <label className="text-body"> I like to do stuff </label>
  );
}

function artSection() {
  return (
    <label className="text-body"> Here I will embed things </label>
  );
}

function reactChatSection() {
  return (projectTemplate(
      "devicon-react-original", 
      reactChatImg,
      "React Chat",
      "an iOS-themed online chat")
  );
}

function minecraftSection() {
  return (projectTemplate(
    "devicon-java-plain-wordmark", 
    minecraftImg,
    "Minecraft Plugins",
    "various Java-based mods for Minecraft")
  );
}

function golSection() {
  return (projectTemplate(
    "devicon-javascript-plain", 
    golImg,
    "Hayden's Game of Life",
    "my spin on Conway's game of life")
  );
}

function clScannerSection() {
  return (projectTemplate(
    "devicon-python-plain", 
    clScannerImg,
    "Craigslist Scanner",
    "finds the best Craiglist deals")
  );
}

function ricoShooterSection() {
  return (projectTemplate(
    "devicon-swift-plain", 
    ricoShooterImg,
    "Rico-Shooter",
    "asteroid shooter game for iOS")
  );
}



export default App;
