import React from 'react';
import './SuggestionsList.css';

class SuggestionsList extends React.Component{
  constructor(props) {
    super(props);
  }

  changeFn(evt) {
    var input = document.getElementById("suggestionListInput");
    if (input) {
      input.blur()
    }
  }


  componentDidUpdate() {

    const input = document.getElementById("searchbox"),
          sugList = document.getElementById("suggestionList");
    if (input && sugList) {
      sugList.style.left = input.offsetLeft + "px";
      sugList.style.top = input.offsetTop + input.offsetHeight + "px";
      sugList.style.width = input.offsetWidth + "px";
    }
  }

  doAction(evt) {
    let str = evt.currentTarget.innerHTML,
        url = str.split('href="')[1].split('">')[0];
        window.open(url, "_blank");
  }

  render() {
    let listDiv = (<div className="suggestionsList" id="suggestionList">
                      <ul onMouseDown={this.doAction} className="suggestionItem"> <a href="https://www.linkedin.com/in/mohaiminalaoun"> What is his experience? </a></ul>
                      <ul onMouseDown={this.doAction} className="suggestionItem"> <a href="https://www.linkedin.com/in/mohaiminalaoun">Mohaimin's resume </a></ul>
                      <ul onMouseDown={this.doAction} className="suggestionItem"> <a href="https://www.github.com/mohaiminalaoun">What are some of his projects?</a></ul>
                      <ul onMouseDown={this.doAction} className="suggestionItem"> <a href="https://www.vanderbilt.edu">Where did he go to college</a></ul>
                      <ul onMouseDown={this.doAction} className="suggestionItem"> <a href="mailto:mohaiminx@gmail.com">How to contact Mohaimin?</a></ul>
                    </div>);
      //console.log(this.props.shouldShowSuggestion);
      return this.props.shouldShowSuggestion ? listDiv : null;
  }
}

export default SuggestionsList;
