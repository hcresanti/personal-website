import React from "react";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-scroll"

const googleImgPrefix = "https://drive.google.com/uc?id="

const reactChatImg =    "1dobk2mqXYqNpuaqnt8ph0sQjHGbtduu7"
const golImg =          "1yB4Is-Qehlu1w543uGV3Fz5-pVP62hv8"
const ricoShooterImg =  "1TSG-vyvfGZCgoEb08ZHva2OlnMPQWhV-"
const clScannerImg =    "1RXAJmyUpEH1cqpKUEpkQf99NYSg8kj7x"
const minecraftImg =    "1KB32DVpQvDuD4fTpjfpxY4bBIOYZ8rum"
const kartRacerImg =    "1UVPdWrYGn-xPA-RJ6cUUqQO2RyvxgAV9"

function App() {

  return (
    <div className="background">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      
      <div className="sidebar">
        { sidebarContent() }
      </div>

      <div className="main" id="main">

        <div className="name sub margin-t-25">
          hello! my name is
        </div>
        <div className="name padding-b-15 margin-b-10">
          Hayden Cresanti
        </div>

        { section (introSection())}


        <div className="name sub padding-tb-10" id="links">
          my links
        </div>
        { section(linkSection()) }

        <div className="name sub padding-tb-10" id="skills">
          my skills
        </div>
        { section(skillSection()) }

        <div className="name sub padding-tb-10" id="projects">
          my projects
        </div>
        <div className="section-container">
          { projectSection(reactChatSection()) }
          { projectSection(minecraftSection()) }
          { projectSection(golSection()) }
          { projectSection(clScannerSection()) }
          { projectSection(ricoShooterSection()) }
          { projectSection(karRacerSection()) }
        </div>
      </div>
    </div>
  );
}



// TEMPLATES

function section(innerBits) {
  return (
    <div className="section margin-b-15">
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
        <i className={languageIcon + " project-language-icon"}></i>
      </label>
      <div>
        <img className="project-img" src={googleImgPrefix + imgLink} alt=""/>
      </div>
      <div className="project-header">
        {headerText}
      </div>
      <div className="project-body">
        {bodyText}
      </div>
    </>
  );
}



// CONTENT 

function sidebarContent() {
  return (
    <>
      <label>👨‍💻</label>
      <div className="sidebar-grid vertical-center">
        <Link className="bi-house-door-fill sidebar-icon" 
              to="main" spy={true} smooth={true} duration={500}/>
        <Link className="bi-share-fill sidebar-icon" 
              to="links" spy={true} smooth={true} duration={500}/>
        <Link className="bi-clipboard-data-fill sidebar-icon" 
              to="skills" spy={true} smooth={true} duration={500}/>
        <Link className="bi-easel sidebar-icon" 
              to="projects" spy={true} smooth={true} duration={500}/>
      </div>
    </>
  )
}

function introSection() {
  return (
    <div className="padding-15">
      <div className="text-header margin-b-10">
        I'm a Software Engineer
      </div>
      <div className="text-body">
        In 2021 I graduated from the University of Maryland, College Park
      </div>
      <div className="text-body">
        I received a Bachelor's Degree in Computer Science with a minor in Philosophy
      </div>
    </div>
  )
}

function linkSection() {
  return (
    <>
      <div className="link-grid">

        <div className="link-icon">
          <i className="bi-file-earmark-person-fill"/>
          <label className="text-subheader"> Resume</label>
        </div>

        <div className="link-icon">
          <i className="devicon-linkedin-plain"/>
          <label className="text-subheader"> LinkedIn</label>
        </div>

        <div className="link-icon">
          <i className="devicon-github-original"/>
          <label className="text-subheader"> GitHub</label>
        </div>

        <div className="link-icon">
          <i className="bi-envelope-paper-heart-fill"/>
          <label className="text-subheader link-label"> Email</label>
        </div>
      </div>
    </>
  );
}

function skillSection() {
  return (
    <>
      <div className="text-header skill-header">Languages</div>
      <div className="skill-grid">
        <i className="devicon-java-plain skill-icon" title="Java"></i>
        <i className="devicon-python-plain skill-icon" title="Python"></i>
        <i className="devicon-csharp-plain skill-icon" title="C#"></i>
        <i className="devicon-javascript-plain skill-icon" title="JavaScript"></i>
        <i className="devicon-html5-plain skill-icon" title="HTML"></i>
        <i className="devicon-css3-plain skill-icon" title="CSS"></i>
        <i className="devicon-swift-plain skill-icon" title="Swift"></i>
      </div>

      <div className="text-header skill-header">Frameworks + Libraries</div>
      <div className="skill-grid">
        <i className="devicon-react-original skill-icon" title="React"></i>
        <i className="devicon-nodejs-plain skill-icon" title="Node.JS"></i>
        <i className="devicon-express-original skill-icon" title="Express"></i>
        <i className="devicon-mysql-plain skill-icon" title="MySQL"></i>
        <i className="devicon-spring-plain skill-icon" title="Spring"></i>
        <i className="devicon-selenium-original skill-icon" title="Selenium"></i>
        <i className="devicon-dotnetcore-plain skill-icon" title=".NET Core"></i>
      </div>

      <div className="text-header skill-header">Developer Tools</div>
      <div className="skill-grid">
        <i className="devicon-git-plain skill-icon" title="Git"></i>
        <i className="devicon-unity-original skill-icon" title="Unity "></i>
        <i className="devicon-jenkins-line skill-icon" title="Jenkins"></i>
        <i className="devicon-docker-plain skill-icon" title="Docker"></i>
        <i className="devicon-figma-plain skill-icon" title="Figma"></i>
        <i className="devicon-npm-original-wordmark skill-icon" title="NPM"></i>
        <i className="devicon-visualstudio-plain skill-icon" title="Visual Studio"></i>
      </div>
    </>
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

function karRacerSection() {
  return (projectTemplate(
    "devicon-csharp-plain", 
    kartRacerImg,
    "Kart Racer",
    "team project build in Unity")
  );
}



export default App;
