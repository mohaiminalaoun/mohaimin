import React from 'react';
import './SearchResult.css';
import musicbar from './musicbar.svg';
import college from './college.svg';
import email from './email.svg';
import books from './books.svg';
import experience from './experience.svg';
import projects from './projects.svg';
import resume from './resume.svg';
import resumepdf from './resumepdf.pdf';

const SearchResult =  (props) => {

  let src;
      switch (props.icon) {
        case 'musicbar':
          src = musicbar;
          break;
        case 'college':
          src = college;
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
          <div className="result-header"></div>
          <img src={src} className="searchresult-image"alt=""/>
            <div className="result-text">{props.text}</div>
            <div className="result-desc"><a href={(props.icon==="resume") ? resumepdf : props.href} target="_blank">{props.website}</a></div>
        </div>
      );

}

export default SearchResult;
