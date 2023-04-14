import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components'; //homepage layout

import TodoInput from 'app/components/TodoInput'; //다른 폴더에 만든 컴포넌트 사용
import TodoItem from 'app/components/TodoItem';

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

export function HomePage() {
  const [todoList, seetTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      content: '2nd todo',
      completed: false,
      editing: false,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo App Main Page" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title> To Do List</Title>
          <TodoInput
            setTodoList={(todo: ITodoItem) => seetTodoList([todo, ...todoList])}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
