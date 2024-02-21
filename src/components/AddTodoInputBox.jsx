import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import useClickTodoHandler from "../hooks/useClickTodoHandler";

const AddTodoInputBox = () => {
  const { todoText, changeTodoTextHandler, clickAddTodoHandler } =
    useClickTodoHandler();

  return (
    <StWrapper>
      <AddInput
        type="text"
        placeholder="일정을 입력하세요"
        value={todoText}
        onChange={(e) => {
          changeTodoTextHandler(e);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            clickAddTodoHandler();
          }
        }}
      />
      <Button onClick={clickAddTodoHandler}>추가</Button>
    </StWrapper>
  );
};

export default AddTodoInputBox;

const StWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const AddInput = styled.input`
  border: 0;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 1%;
  box-shadow: 0 0 0.5rem 0 #555;
  transition: 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem 0 #000;
  }
`;
