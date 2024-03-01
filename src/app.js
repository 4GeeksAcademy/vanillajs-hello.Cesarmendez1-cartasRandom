/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
  };

  let suit = [
    { s: "♦", color: "red" },
    { s: "♠", color: "black" },
    { s: "♥", color: "red" },
    { s: "♣", color: "black" }
  ];
  let iSuit = suit[Math.floor(Math.random() * suit.length)];
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelectorAll(".pinta").forEach((elem, index) => {
    elem.innerHTML = iSuit.s;
    elem.style.color = iSuit.color;
  });
};
