import React from 'react';
import './SearchResult.css';
import musicbar from './music3.svg';
import college from './college.svg';
import email from './email2.svg';
import books from './books2.svg';
import experience from './work.svg';
import school from './school.svg';
import projects from './projects3.svg';
import resume from './experience.svg';
import resumepdf from './resumepdf.pdf';

const SearchResult =  (props) => {

  const openTab = (href) => {

  }

  const showButton = (ev) => {
    ev.currentTarget.parentElement.children[1].classList.add("hover-btn");
  }
  const hideButton = (ev) => {
    ev.currentTarget.parentElement.children[1].classList.remove("hover-btn");
  }

  const showButtonPerm = (ev) => {
    ev.currentTarget.classList.add("hover-btn");
  }
  const hideButtonPerm = (ev) => {
    ev.currentTarget.classList.remove("hover-btn");
  }
  const click = (ev) => {
    console.log("clicked");
    window.open(ev.currentTarget.dataset.url);
  }

  let src;
      switch (props.icon) {
        case 'musicbar':
          src = musicbar;
          break;
        case 'college':
          src = school;
          break;
        case 'email':
          src = email;
          break;
        case 'books':
          src = books;
          break;
        case 'experience':
          src = experience;
          break;
        case 'projects':
          src = projects;
          break;
        case 'resume':
          src = resume;
          break;
        default:
          src = email;
      }


      return (
        <div className="result-container">
        {/* <div className="result-header"></div> */}
          <div className="curtain" onMouseEnter={showButton} onMouseLeave={hideButton}>
            <div className="curtain-text" onClick={() => openTab(props.href)}>{props.text}</div>
          </div>
          <button data-url={(props.icon==="resume") ? resumepdf : props.href} className="search-result-btn" onMouseEnter={showButtonPerm} onMouseLeave={hideButtonPerm} onClick={click}>OPEN</button>
          <img src={src} className="searchresult-image"alt=""/>
          {/*<div className="result-text">{props.text}</div>*/}
          {/* <div className="result-desc"><a href={(props.icon==="resume") ? resumepdf : props.href} target="_blank">{props.website}</a></div>*/}
        </div>
      );

}

export default SearchResult;
