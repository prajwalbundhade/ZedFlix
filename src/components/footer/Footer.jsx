import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Terms Of Use
            </a>{" "}
          </li>
          <li className="menuItem">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Privacy-Policy
            </a>
          </li>
          <li className="menuItem">
            {" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              About
            </a>{" "}
          </li>
          <li className="menuItem">
            <a
              target="_blank"
              href="https://github.com/prajwalbundhade"
              rel="noreferrer"
            >
              Doc
            </a>
          </li>
        </ul>
        <div className="infoText">
          Zedflix is an immersive online platform designed for movie and TV show
          enthusiasts. Powered by the TMDB API, Zedflix offers users a seamless
          experience to explore, discover, and engage with their favorite movies
          and TV shows.
        </div>
        <div className="socialIcons">
          <a
            target="_blank"
            href="https://github.com/prajwalbundhade"
            rel="noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/Mr_Prajwal06"
            rel="noreferrer"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prajwal-bundhade-a53a76218/"
            rel="noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
