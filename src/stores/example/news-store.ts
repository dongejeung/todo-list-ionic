import axios from 'axios'
import { action, computed, observable } from 'mobx'
import { Task, task } from 'mobx-task'


interface INews {
  title: string
}
const initState = {
  news: [],
  query: '',
}

export class News {
  @observable.shallow news: INews[] = initState.news
  @observable query = initState.query

  constructor() {}

  @task
  getNews = (() => {
    return axios('https://api.hnpwa.com/v0/news/1.json').then(action(({ data }) => (this.news = data)))
  }) as Task<INews[], void>

  @action
  setQuery = (_query: string) => {
    this.query = _query
  }

  @computed
  get filteredNews(): INews[] {
    return this.news.filter((v) => v.title.includes(this.query))
  }
}
