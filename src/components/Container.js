import React, {useState} from "react";

const Container = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="container">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Container;
