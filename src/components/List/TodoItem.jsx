import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import useClickTodoHandler from "../../hooks/useClickTodoHandler";

const TodoItem = ({ item }) => {
  const { id, todo } = item;
  const { clickDeleteTodoHandler } = useClickTodoHandler();

  return (
    <StTodoItemBox>
      <StTodoContent>{todo}</StTodoContent>
      <Button
        onClick={() => {
          clickDeleteTodoHandler(id);
        }}
      >
        삭제
      </Button>
    </StTodoItemBox>
  );
};

export default TodoItem;

const StTodoItemBox = styled.div`
  width: 80%;
  height: auto;
  flex: 0 0 auto;
  padding: 3% 0;
  border: 1px solid #000;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const StTodoContent = styled.div`
  width: 50%;
  height: auto;
  word-break: break-all;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
`;
