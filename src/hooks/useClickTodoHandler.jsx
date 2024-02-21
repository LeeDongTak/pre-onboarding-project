import React, { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../store/modules/todoSlice";

const useClickTodoHandler = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const changeTodoTextHandler = (e) => {
    setTodoText(e.target.value);
  };

  const clickAddTodoHandler = () => {
    if (todoText.length === 0) {
      alert("내용을 입력하세요.");
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  const clickDeleteTodoHandler = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(deleteTodo(id));
    }
  };

  return {
    todoText,
    changeTodoTextHandler,
    clickAddTodoHandler,
    clickDeleteTodoHandler,
  };
};

export default useClickTodoHandler;
