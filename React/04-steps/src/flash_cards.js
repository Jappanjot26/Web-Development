import { useState } from "react";
import "./flash_cards.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 5632,
    question: "What lifecycle method is called after a component is mounted?",
    answer: "componentDidMount",
  },
  {
    id: 8741,
    question: "What is the purpose of the useEffect hook?",
    answer: "To perform side effects in function components",
  },
  {
    id: 6542,
    question: "What are the two main types of components in React?",
    answer: "Class components and functional components",
  },
  {
    id: 9814,
    question: "What is the context API used for in React?",
    answer: "To manage global state and avoid prop drilling",
  },
  {
    id: 7321,
    question: "How can you optimize performance in a React app?",
    answer: "Using React.memo and useCallback",
  },
  {
    id: 8456,
    question: "What do we use to handle form submissions in React?",
    answer: "Event handlers",
  },
  {
    id: 3201,
    question: "What is the purpose of keys in React lists?",
    answer: "To uniquely identify elements for efficient re-rendering",
  },
  {
    id: 4178,
    question:
      "What hook would you use to manage side effects in a functional component?",
    answer: "useEffect",
  },
  {
    id: 2564,
    question: "What is a higher-order component (HOC)?",
    answer: "A function that takes a component and returns a new component",
  },
  {
    id: 4920,
    question: "What does the useReducer hook do?",
    answer: "Manages complex state logic in functional components",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(q.id)}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
