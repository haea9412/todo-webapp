interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean; //todo 생성 여부 확인
  editing: boolean; //todo 수정 상태
}

//.d.ts하면 전역에서 사용 가능
