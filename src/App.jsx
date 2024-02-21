import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyled";
import AddTodoInputBox from "./components/Input/AddTodoInputBox";
import TodoList from "./components/List/TodoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <StWrapper>
        <AddTodoInputBox />
        <TodoList />
      </StWrapper>
    </>
  );
}

export default App;

const StWrapper = styled.div`
  width: 800px;
  height: 80vh;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 10vh;
  border-radius: 1rem;
`;
