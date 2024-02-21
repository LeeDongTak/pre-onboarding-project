import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <StTodoList>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </StTodoList>
  );
};

export default TodoList;

const StTodoList = styled.ul`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
