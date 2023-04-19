import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components'; //homepage layout

import TodoInput from 'app/components/TodoInput'; //다른 폴더에 만든 컴포넌트 사용
import TodoItem from 'app/components/TodoItem';
import { useTodoSlice } from 'store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoListSelector } from 'store/todo/selectors';
// https://create-react-app.dev/docs/making-a-progressive-web-app/ pwa app 만드는 법
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
  border-radius: 15px;
  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div`
  height: 450px;
  overflow-y: auto;
  @media (max-width: 425px) {
    height: calc(100vh - 128px);
  }
`;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(TodoListSelector);
  const dispatch = useDispatch();
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
            addTodo={(content: string) =>
              dispatch(TodoActions.addTodo(content))
            }
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(TodoActions.editModeTodo({ id: todo.id }))
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({ id: todo.id, content: content }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
