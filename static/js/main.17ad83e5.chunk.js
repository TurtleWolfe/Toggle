(this.webpackJsonptoggle=this.webpackJsonptoggle||[]).push([[0],{17:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var s=a(0),c=a(1),r=a.n(c),n=a(7),i=a.n(n),l=(a(17),a.p+"static/media/logo.11bcd0b5.svg"),o=(a(18),a(19),a(8)),j=a(9),b=a(11),h=a(10),f=a(22),m=a(23),g=a(24),p=a(25),d=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).setToggleOnOff=function(){"Start"===s.state.tglStart?(s.interval=setInterval(s.countDown,1e3),s.setState({tglStart:"Pause",tglVariant:"btn-warning"})):(s.setState({tglStart:"Start",tglVariant:"btn-success"}),clearInterval(s.interval))},s.countDown=function(){0===s.state.timeLft?(s.setState({tglStart:"Start",tglVariant:"btn-success",timeLft:10}),clearInterval(s.interval)):s.setState({timeLft:s.state.timeLft-1})},s.state={tglStart:"Start",tglVariant:"btn-success",timeLft:3},s}return Object(j.a)(a,[{key:"render",value:function(){var t=this.state.tglStart,e=this.state.tglVariant,a=this.state.timeLft;return Object(s.jsxs)(f.a,{children:[Object(s.jsx)(m.a,{className:"justify-content-center",children:Object(s.jsx)(g.a,{as:p.a,className:e,xs:5,sm:4,md:3,lg:2,onClick:this.setToggleOnOff,children:Object(s.jsxs)("h4",{children:[t,Object(s.jsx)("br",{}),e]})})}),Object(s.jsx)("br",{}),Object(s.jsx)(m.a,{className:"justify-content-center",children:Object(s.jsx)(g.a,{as:p.a,id:"start_stop",className:e,xs:4,sm:4,md:3,lg:2,onClick:this.setToggleOnOff,children:Object(s.jsx)("h4",{id:"timer-left",children:a})})})]})}}]),a}(c.Component);var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("a",{className:"App-link",href:"https://ScriptHammer.com",target:"_blank",rel:"noopener noreferrer",title:"TechBlog",children:Object(s.jsx)("span",{className:"App-hammer",children:Object(s.jsx)("img",{src:l,className:"App-logo",alt:"logo"})})}),Object(s.jsx)(d,{}),Object(s.jsx)("h3",{children:Object(s.jsxs)("a",{className:"App-link",href:"hhttps://github.com/TurtleWolfe/Toggle",target:"_blank",rel:"noopener noreferrer",title:"GitHub Repo",children:[Object(s.jsx)("i",{className:"fab fa-github"})," GitHub Repo ",Object(s.jsx)("i",{className:"fab fa-github"})]})}),Object(s.jsx)("h4",{children:Object(s.jsxs)("a",{className:"App-link",href:"https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects",target:"_blank",rel:"noopener noreferrer",title:"FreeCodeCamp.com Front End Projects",children:[Object(s.jsx)("i",{className:"fab fa-free-code-camp"})," Front End Projects ",Object(s.jsx)("i",{className:"fab fa-free-code-camp"})]})}),Object(s.jsx)("h5",{children:Object(s.jsxs)("a",{className:"App-link",href:"https://www.twitch.tv/collections/mgPReDzBVBbReg",target:"_blank",rel:"noopener noreferrer",title:"These Episodes on Twitch I build a template for my freeCodeCamp projects, with FontAwesome, React-BootStrap & Analytics",children:[Object(s.jsx)("i",{className:"fab fa-twitch"})," These Episodes on Twitch ",Object(s.jsx)("i",{className:"fab fa-twitch"})]})})]})})})},u=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(e){var a=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),s(t),c(t),r(t),n(t)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),u()}},[[20,1,2]]]);
//# sourceMappingURL=main.17ad83e5.chunk.js.map