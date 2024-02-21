import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

export default Button;

const StButton = styled.button`
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 1% 3%;
  background-color: #0cf;
  box-shadow: 0 0 0.5rem 0 #555;
  transition: 0.2s;
  &:hover {
    background-color: #0ef;
  }
`;
