(this.webpackJsonpmohaimin=this.webpackJsonpmohaimin||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.01003c50.svg"},,,function(e,t){e.exports={suggestionItemsData:[{href:"https://www.linkedin.com/in/mohaiminalaoun",text:"What is his experience?",tags:"job history work digital reasoning digitalreasoning vanderbilt vanderbiltuniversity microstrategy micro strategy"},{href:"https://www.linkedin.com/in/mohaiminalaoun",text:"Mohaimin's resume",tags:"resume cv curriculum vitae"},{href:"https://www.github.com/mohaiminalaoun",text:"What are some of his projects?",tags:"work side projects experiments hobbies spare time"},{href:"https://www.linkedin.com/in/mohaiminalaoun",text:"Where did he go to college?",tags:"study education vanderbilt vanderbiltuniversity college computer science computerscience cs bachelor masters degree major minor graduate"},{href:"mailto:mohaiminx@gmail.com",text:"How to contact Mohaimin?",tags:"email phone send message letter"}]}},function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/half.d09969cb.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(9),s=n.n(a),r=(n(23),n(2)),c=n(3),u=n(5),l=n(4),g=n(6),h=(n(24),n(7)),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onFocus=function(){},n.onKeyUp=function(e){n.props.showSuggestionFn(e.target.value),"Enter"===e.key&&n.props.searchTriggerFn(e.target.value)},n.onBlur=function(e){n.props.hideSuggestionFn()},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="searchbox "+(this.props.shouldShowSuggestion?"searching":"");return i.a.createElement("div",{className:"search-container"},i.a.createElement("input",{id:"searchbox",value:this.input,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,autoComplete:"off",className:e}))}}]),t}(i.a.Component),d=Object(h.b)()(m),p=(n(30),i.a.Component,n(31),n(17)),f=n.n(p),w=function(e){function t(e){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"changeFn",value:function(e){var t=document.getElementById("suggestionListInput");t&&t.blur()}},{key:"componentDidUpdate",value:function(){var e=document.getElementById("searchbox"),t=document.getElementById("suggestionList");e&&t&&(t.style.left=e.offsetLeft+"px",t.style.top=e.offsetTop+e.offsetHeight+"px",t.style.width=e.offsetWidth+"px")}},{key:"doAction",value:function(e){var t=e.currentTarget.innerHTML.split('href="')[1].split('">')[0];window.open(t,"_blank")}},{key:"render",value:function(){var e=this,t=this.props.inputValue&&this.props.inputValue.toLowerCase(),n=f.a.suggestionItemsData.filter((function(e){var n=e.href,o=e.text,i=e.tags;return-1!==n.toLowerCase().indexOf(t)||-1!==o.toLowerCase().indexOf(t)||-1!==i.toLowerCase().indexOf(t)})).map((function(t){return i.a.createElement("ul",{onMouseDown:e.doAction,key:t.text,className:"suggestionItem"}," ",i.a.createElement("a",{href:t.href}," ",t.text," "))})),o=i.a.createElement("div",{className:"suggestionsList",id:"suggestionList"},n);return this.props.shouldShowSuggestion?o:null}}]),t}(i.a.Component),v=n(14),b=n.n(v),y=(n(32),n(33),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).triggerSearch=function(e){n.setState({finalSearchQuery:e})},n.showSuggestionFn=function(e){n.setState({shouldShowSuggestion:!0,startingText:e})},n.hideSuggestionFn=function(e){n.setState({shouldShowSuggestion:!1,startingText:e})},n.updateDimensions=function(){var e=document.getElementById("logo-container"),t=document.getElementById("searchbox"),n=(document.getElementById("half-logo"),t.offsetLeft,t.offsetWidth,document.documentElement.clientWidth),o=document.documentElement.clientHeight;e.style.left=n/2-.125*Math.min(n,o)+"px"},n.render=function(){var e=i.a.createElement("div",{id:"logo-container",className:"logo-container"},i.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),i.a.createElement("img",{src:b.a,className:"App-logo shadow",alt:"logo"}));return i.a.createElement("div",{className:"background"},i.a.createElement(d,{searchTriggerFn:n.triggerSearch,showSuggestionFn:n.showSuggestionFn,hideSuggestionFn:n.hideSuggestionFn,shouldShowSuggestion:n.state.shouldShowSuggestion}),i.a.createElement(w,{shouldShowSuggestion:n.state.shouldShowSuggestion,inputValue:n.state.startingText}),e)},n.state={finalSearchQuery:null,shouldShowSuggestion:!1,startingText:""},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}}]),t}(i.a.Component)),S=Object(h.b)()(y),x=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(x.b)((function(e,t){return console.log("reducer is called"),console.log(e),console.log(t),e}));E.dispatch({type:"INCREMENT"}),s.a.render(i.a.createElement(h.a,{store:E},i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.35b9b70d.chunk.js.map