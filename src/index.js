import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


(() => {
  "use strict";
  function isWebp() {
    function testWebP(callback) {
      let webP = new Image;
      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP((function (support) {
      let className = support === true ? "webp" : "no-webp";
      document.documentElement.classList.add(className);
    }));
  }
  let addWindowScrollEvent = false;
  setTimeout((() => {
    if (addWindowScrollEvent) {
      let windowScroll = new Event("windowScroll");
      window.addEventListener("scroll", (function (e) {
        document.dispatchEvent(windowScroll);
      }));
    }
  }), 0);
  var weekoptions = {
    weekday: "long"
  };
  var ddmmyyyy = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  var hhmmss = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function renderTime() {
    var date = new Date;
    //! Каждую секунду геренит новый дейт. Без этого никак?
    var weekday = date.toLocaleString("ru", weekoptions);
    weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    document.getElementsByClassName("date__weekday")[0].innerHTML = weekday;
    document.getElementsByClassName("date__year")[0].innerHTML = date.toLocaleString("ru", ddmmyyyy);
    document.getElementsByClassName("date__time")[0].innerHTML = date.toLocaleString("ru", hhmmss);
  }
  renderTime();
  setInterval(renderTime, 1e3);
  //! Оптимизировать часы в хедере!
  document.addEventListener("click", (function (event) {
    var clickedElement = event.target;
    var classList = document.getElementsByClassName("popup-elements")[0].classList;
    if (clickedElement.classList.contains("logined__icon")) classList.add("popup-elements__active");
    if (!clickedElement.classList.contains("logined__icon") && classList.contains("popup-elements__active")) classList.remove("popup-elements__active");
  }));
  window["FLS"] = true;
  isWebp();
})();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
