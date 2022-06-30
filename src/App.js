import React from "react";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-scroll"

import reactChatImg from   "./images/message.png"
import golImg from         "./images/gol.png"
import ricoShooterImg from "./images/ricoshooter.png"
import clScannerImg from   "./images/craigslist.png"
import minecraftImg from   "./images/minecraft.png"
import kartRacerImg from   "./images/kartracer.png"

const reactChatLink = "https://reactchat-hjc.web.app/"
const golLink = "https://codepen.io/hcresanti/full/zYKQPbW"
const ricoShooterLink = "https://drive.google.com/file/d/1bqpt8iSWAAUrdZ198H9rx083S3yZIGmA/view"
const clScannerLink = "https://github.com/hcresanti/CraigslistScanner"
const minecraftLink = "https://github.com/hcresanti/Essentials"
const kartRacerLink = "https://drive.google.com/file/d/10nRmUsRne-54NSX6PA1HkpnbgGdb0z8N/view"

const gitHubLink = "https://github.com/hcresanti"
const linkedInLink = "https://www.linkedin.com/in/haydencresanti/"
const emailLink = "mailto:hcresanti@gmail.com"
const resumeLink = "https://drive.google.com/file/d/17oSGaa9bUgi9ZEUWLFAqWhpTYbg3HzeA/view"

function App() {

  return (
    <div className="background">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      
      <div className="sidebar">
        { sidebarContent() }
      </div>

      <div className="main" id="main">

        <div className="name sub margin-t-25">
          hello world! my name is
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


// FUNCTIONS

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
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

function projectTemplate(languageIcon, projectLink, imgLink, headerText, bodyText) {
  return (
    <div className="use-pointer" onClick={() => openInNewTab(projectLink)}>
      <label className="project-icon">
        <i className={languageIcon + " project-language-icon"}></i>
      </label>
      <div>
        <img className="project-img" src={imgLink} alt=""/>
      </div>
      <div className="project-header">
        {headerText}
      </div>
      <div className="project-body">
        {bodyText}
      </div>
    </div>
  );
}



// CONTENT 

function sidebarContent() {
  return (
    <>
      <label>👨‍💻</label>
      <div className="sidebar-grid vertical-center">
        <Link className="bi-house-door-fill sidebar-icon use-pointer" 
              to="main" spy={true} smooth={true} duration={500}/>
        <Link className="bi-share-fill sidebar-icon use-pointer" 
              to="links" spy={true} smooth={true} duration={500}/>
        <Link className="bi-clipboard-data-fill sidebar-icon use-pointer" 
              to="skills" spy={true} smooth={true} duration={500}/>
        <Link className="bi-easel sidebar-icon use-pointer" 
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
      <div className="text-body">
        I'm now currently working full time as a software developer for Scienna
      </div>
    </div>
  )
}

function linkSection() {
  return (
    <>
      <div className="link-grid">

        <div className="link-icon use-pointer" onClick={() => openInNewTab(resumeLink)}>
          <i className="bi-file-earmark-person-fill"/>
          <label className="text-subheader"> Resume</label>
        </div>

        <div className="link-icon use-pointer" onClick={() => openInNewTab(linkedInLink)}>
          <i className="devicon-linkedin-plain"/>
          <label className="text-subheader"> LinkedIn</label>
        </div>

        <div className="link-icon use-pointer" onClick={() => openInNewTab(gitHubLink)}>
          <i className="devicon-github-original"/>
          <label className="text-subheader"> GitHub</label>
        </div>

        <div className="link-icon use-pointer" onClick={() => openInNewTab(emailLink)}>
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
      reactChatLink,
      reactChatImg,
      "React Chat",
      "an iOS-themed online chat")
  );
}

function minecraftSection() {
  return (projectTemplate(
    "devicon-java-plain-wordmark", 
    minecraftLink,
    minecraftImg,
    "Minecraft Plugins",
    "various Java-based mods for Minecraft")
  );
}

function golSection() {
  return (projectTemplate(
    "devicon-javascript-plain", 
    golLink,
    golImg,
    "Hayden's Game of Life",
    "my spin on Conway's game of life")
  );
}

function clScannerSection() {
  return (projectTemplate(
    "devicon-python-plain", 
    clScannerLink,
    clScannerImg,
    "Craigslist Scanner",
    "finds the best Craiglist deals")
  );
}

function ricoShooterSection() {
  return (projectTemplate(
    "devicon-swift-plain", 
    ricoShooterLink,
    ricoShooterImg,
    "Rico-Shooter",
    "asteroid shooter game for iOS")
  );
}

function karRacerSection() {
  return (projectTemplate(
    "devicon-csharp-plain", 
    kartRacerLink,
    kartRacerImg,
    "Kart Racer",
    "team project build in Unity")
  );
}



export default App;
