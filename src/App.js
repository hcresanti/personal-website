import React from "react";
import "./main.css";

// #202225 server bar
// #36393f main
// #2f3136 people sidebar
// #42464d accent
// #96989d text
// #b9bbbe icon

const reactChatImg = "https://lh4.googleusercontent.com/I0Ck6HnxmAQW39WjTvQvhoLwOPgHigAuD2aQP8f5J0O_RZMgNk-73D7kQZK2scsiwQLXJKnl_XL9x7TNqvKDfIBRZb-bB9brgatfEB8TnciV12aUNSYpYzWrRvfdegT-=w1280"
const golImg = "https://lh6.googleusercontent.com/XnsBE_2fYGWU64GOtur7Vgs_fDUhOLFzg8uKVGaWl9yD3otsS5JgNaOpXbn-Fasx4aNLotNJR-IZf9c_Uwr1wUgIlQCIt0xH9SYE1XqoZnfuoMkgm48yMKj9BfPbL5cXsw=w1280"
const ricoShooterImg = "https://lh6.googleusercontent.com/UMsr8U0Jp-SJdpk1jUTsvfBqmWzN49WLEW0J85-uHlyls-HlVViwo-GP7ZgXT9hZZvqII3niTNGxWuNGg9BflCcC2y9anKUB_WS_Dt0sku7JQNZvqeO_ZbynQJcSNzL7Wg=w1280"
const clScannerImg = "https://lh6.googleusercontent.com/M1PNY4La28LRdlyQqJZlXrhWetApvLwHL5VjV3ToW6KFjhjV7fv_dqcrYChn7IV1EypBuo-cBSHpkwa4_ye6juDmJKteIZ65ohiGjWCxMnJLq4YBZPKfORI4ifq7o9rkwQ=w1280"
const minecraftImg = "https://lh6.googleusercontent.com/ykKkh7LFGxjKtlruJVuXDG6MOLx2d32APCyjNCw8HC3b-KXUlOcRWNflVVbiF-HEnrgEytnGfo2mzvdl3Ml2eyb8THvp8ZfJ0rBJdtFGXXlnWu2LK-nkQ345nq8r8UdSBA=w1280"

function App() {
  return (
    <div className="background">
      <div className="sidebar">
        <label>👨‍💻</label>
      </div>

      <div className="main">
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
      <label className="project-icon">{languageIcon}</label>
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
      <div className="text-header"> Languages </div>
      <label className="text-body">Java Python C# JavaScript</label>

      <div className="text-header"> Tech </div>
      <label className="text-body">Node Express Springboot React</label>

      <div className="text-header"> Tools </div>
      <label className="text-body">Git Visual Studio</label>
    </>
  );
}

function hobbySection() {
  return (
    <>
      <label className="text-body">I like to do stuff</label>
    </>
  );
}

function artSection() {
  return (
    <>
      <label className="text-body">Here I will embed things</label>
    </>
  );
}

function reactChatSection() {
  return (projectTemplate(
      "⚛️", 
      reactChatImg,
      "React Chat",
      "A React based online chat app")
  );
}

function minecraftSection() {
  return (projectTemplate(
    "⚛️", 
    minecraftImg,
    "Minecraft Plugin",
    "A React based online chat app")
  );
}

function golSection() {
  return (projectTemplate(
    "⚛️", 
    golImg,
    "Minecraft Plugin",
    "A React based online chat app")
  );
}

function clScannerSection() {
  return (projectTemplate(
    "⚛️", 
    clScannerImg,
    "Minecraft Plugin",
    "A React based online chat app")
  );
}

function ricoShooterSection() {
  return (projectTemplate(
    "⚛️", 
    ricoShooterImg,
    "Minecraft Plugin",
    "A React based online chat app")
  );
}



export default App;
