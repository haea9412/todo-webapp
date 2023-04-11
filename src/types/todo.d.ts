interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}

//.d.ts하면 전역에서 사용 가능
