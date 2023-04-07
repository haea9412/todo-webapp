import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components'; //homepage layout

const Wrapper = styled.div`
  width: 100%;
  height: 100vh; //full

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3c2c7;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo App Main Page" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title> To Do List</Title>
          <TodoList>
            <TodoItem>
              <TodoCheck type="checkbox" /> this is todo box
            </TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
