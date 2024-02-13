import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <ContentWrapper>
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
    </ContentWrapper>
   
  );
};

export default BackToTopButton;
