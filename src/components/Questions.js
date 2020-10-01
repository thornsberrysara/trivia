const questions = [
  {
    question: `What is "Blah Blah's" real name?`,
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
    question: "Which college did Stella attend?",
    answers: ["Wesleyan", "Harvard", "Stanford", "New York University"],
    correct: "Stanford",
    id: "4"
  },
  {
    question: "Which doppelganger was spotted at Robots vs. Wrestlers?",
    answers: ["Marshall", "Robin", "Barney", "Ted"],
    correct: "Ted",
    id: "5"
  },
  {
    question: "Which breed of dog did Ted have as a child?",
    answers: ["Golden Retriever", "Bull Terrier", "Shih Tzu", "Black Lab"],
    correct: "Golden Retriever",
    id: "6"
  },
  {
    question: "What was Robin Sparkle's first hit song?",
    answers: ["Sand Castles in the Sand", "P.S. I Love You", "Let's Go to the Mall", "Murder Train"],
    correct: "Let's Go to the Mall",
    id: "7"
  },
  {
    question: "Which alcoholic beverage fixed the relationship between Marshall and Barney?",
    answers: ["Tequila", "Beer", "Strawberry Daiquiri", "Red Wine"],
    correct: "Beer",
    id: "8"
  },
  {
    question: `How often does "The Naked Man" work?`,
    answers: ["1/4 times", "2/5 times", "1/3 times", "2/3 times"],
    correct: "2/3 times",
    id: "9"
  },
  {
    question: "What determined a happy couple?",
    answers: ["The Olive Theory", "Daily Brunch", "Living together", "Sharing a booth"],
    correct: "The Olive Theory",
    id: "10"
  }
];

export default (n = 10) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));
