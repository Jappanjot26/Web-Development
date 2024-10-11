import { useEffect, useState } from "react";

export default function DateCounter() {
  const style = { display: "flex" };
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div style={style}>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div style={style}>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        {`${
          count == 0
            ? "Today"
            : count > 0
            ? count + " Days After"
            : count * -1 + " Days Ago"
        }  `}
        {date.toDateString()}
      </div>
    </>
  );
}
