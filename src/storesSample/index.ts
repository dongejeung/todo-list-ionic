import { configure } from 'mobx'

import { TodoList } from './example/todo-list-store'

configure({ enforceActions: 'observed' }) // action 밖에서 state 수정 비허용

class RootStore {
  todoList: TodoList

  constructor() {
    this.todoList = new TodoList()
  }
}

export default RootStore
