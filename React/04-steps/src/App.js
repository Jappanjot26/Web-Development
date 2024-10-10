import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test] = useState({ name: "Jonas" });
  const style = { backgroundColor: "#7950f2", color: "#fff" };

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
    // BAD PRACTICE
    // Consider states as immutable, mutate with react tools only
    // test.name = "Fred";
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
            {/* test.name */}
          </div>
          <div className="buttons">
            <button style={style} onClick={handlePrevious}>
              Previous
            </button>
            <button style={style} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
