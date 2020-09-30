import React from "react";

const questions = [
  {
    question: "What is 'Blah Blah's' real name?",
    answers: ["Jennifer", "Carol", "Alyssa", "Lily"],
    correct: "Carol",
    id: "1"
  },
  {
    question: "Where did Ted and Lily meet?",
    answers: [
      "MacLaren's",
      "Robin's Apartment",
      "Schlegel's Bagels",
      "Wesleyan University"
    ],
    correct: "Wesleyan University",
    id: "2"
  },
  {
    question: "Which movie did Marshall and Lily watch every Valentine's Day?",
    answers: ["Predator", "Dirty Dancing", "The Princess Bride", "Groundhog Day"],
    correct: "Predator",
    id: "3"
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correct: "",
    id: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correct: "",
    id: ""
  },
  {
    question: "",
    answers: ["", "", "", ""],
    correct: "",
    id: ""
  }
];

export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));
