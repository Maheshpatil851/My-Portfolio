import React from 'react';
import './Header.css';
import SendIcon from "@mui/icons-material/Send";
// import { HashLink } from "react-router-hash-link";
import Button from "@mui/material/Button";
import Card from 'react-bootstrap/Card';
import { TypeAnimation } from "react-type-animation";


function Header() {
  return (
    <section className="header" id="header">
    <header className="header">

      <div>
    





        <Card className="bg-dark text-white "  >
          <Card.Img id='c1' src="m2.jpg" alt="Card image"  className='opacity-50' />
          <Card.ImgOverlay className='overlay' style={{ margintop: '240px'}} >
 
           {/* <div id="hero" className="hero route bg-image" >
              <div className="overlay-itro"></div>
              <div className="hero-content display-table">
                <div className="table-cell">
                  <div className="container">
                  
                  
                  
                     <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> 
                  </div>
                </div>
              </div>
            </div> */}

            <Card.Title  ><p className="text-xl font-bold" >Hi, I am</p>
                  <p className="text-xl font-bold">Mahesh Patil ✋</p></Card.Title>
            <Card.Text>
            <p className="mb-2"> A passionate DOT NET Full Stack Software Developer 🚀</p>
            
            
            </Card.Text>
            <p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "DOT NET Full Stack Developer",
              1000, 
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "React Developer",
              2000,
              "Looking for Opportunity...",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <br />
        <Button
            className=""
            variant="contained"
            endIcon={<SendIcon />}
          > Say hello</Button>
             <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </Card.ImgOverlay>
        </Card> 
        {/* <HashLink className="text-decoration-none"> */}
          
         
        {/* </HashLink> */}
      </div>


    </header>
    </section>

  );
}

export default Header;

