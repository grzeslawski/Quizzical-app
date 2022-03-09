import React from "react";
import { Wrapper, StyledAnswer } from "./Answers.styles";

function Answers(props) {
  const answerElements = props.answers ? (
    props.answers.map((answer) => (
      <StyledAnswer
        onClick={() => props.handleCheck(answer.answer, props.id)}
        isChecked={answer.isChecked}
        key={answer.answer}
        isCorrect={answer.isCorrect}
      >
        {answer.answer}
      </StyledAnswer>
    ))
  ) : (
    <p>No found answers</p>
  );

  return <Wrapper>{answerElements}</Wrapper>;
}

export default Answers;
