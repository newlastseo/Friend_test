import React from "react";
import styled from "styled-components";
import img from "./scc_img01.png";

const Quiz = (props) => {
  const list = props.list;
  return (
    <QuizContainer>
      <p>
        <span>5번 문제</span>
      </p>

      <Question>{list[0].question}</Question>

      <AnswerZone>
        <Answer>o</Answer>
        <Answer>x</Answer>
      </AnswerZone>

      <DragItem>
        <div>
          <img src={img} />
        </div>
      </DragItem>
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  text-align: center;
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  flex-direction: row;
  min-height: 70vh;
`;

const Answer = styled.div`
  width: 50%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  font-weight: 600;
  color: #dadcfc77;
`;

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    background-color: #ffd6aa;
    border-radius: 150px;
  }
  & img {
    max-width: 150px;
  }
`;

export default Quiz;
