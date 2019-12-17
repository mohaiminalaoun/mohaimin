import React from "react";
import "./SearchResult.css";
import musicbar from "./assets/music3.svg";
import college from "./assets/college.svg";
import email from "./assets/email2.svg";
import books from "./assets/books2.svg";
import experience from "./assets/work.svg";
import school from "./assets/school.svg";
import projects from "./assets/projects3.svg";
import resume from "./assets/experience.svg";
import resumepdf from "./assets/resumepdf.pdf";

const SearchResult = ({ icon, text, href }) => {
  const openTab = href => {};

  const showButton = ev => {
    ev.currentTarget.parentElement.children[1].classList.add("hover-btn");
  };
  const hideButton = ev => {
    ev.currentTarget.parentElement.children[1].classList.remove("hover-btn");
  };

  const showButtonPerm = ev => {
    ev.currentTarget.classList.add("hover-btn");
  };
  const hideButtonPerm = ev => {
    ev.currentTarget.classList.remove("hover-btn");
  };
  const click = ev => {
    window.open(ev.currentTarget.dataset.url);
  };

  let src;
  switch (icon) {
    case "musicbar":
      src = musicbar;
      break;
    case "college":
      src = school;
      break;
    case "email":
      src = email;
      break;
    case "books":
      src = books;
      break;
    case "experience":
      src = experience;
      break;
    case "projects":
      src = projects;
      break;
    case "resume":
      src = resume;
      break;
    default:
      src = email;
  }

  return (
    <div className="result-container">
      {/* <div className="result-header"></div> */}
      <div
        className="curtain"
        onMouseEnter={showButton}
        onMouseLeave={hideButton}
      >
        <div className="curtain-text" onClick={() => openTab(href)}>
          {text}
        </div>
      </div>
      <button
        data-url={icon === "resume" ? resumepdf : href}
        className="search-result-btn"
        onMouseEnter={showButtonPerm}
        onMouseLeave={hideButtonPerm}
        onClick={click}
      >
        OPEN
      </button>
      <img src={src} className="searchresult-image" alt="" />
    </div>
  );
};

export default SearchResult;
