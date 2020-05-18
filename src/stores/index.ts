import { configure } from 'mobx'

import { News } from './example/news-store'
import { TodoList } from './example/todo-list-store'
import { TodoCardList } from './example/todo-card-list-store'

configure({ enforceActions: 'observed' }) // action 밖에서 state 수정 비허용

class RootStore {
  todoList: TodoList
  news: News
  TodoCardList: TodoCardList

  constructor() {
    this.todoList = new TodoList()
    this.news = new News()
    this.TodoCardList = new TodoCardList()
  }

}

export default RootStore
