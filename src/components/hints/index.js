import './style.scss'

export default class Hints {
  constructor() {
    this.container = document.createElement('aside')
    this.container.classList.add('hints__container')
    const title = document.createElement('h2')
    title.classList.add('hints__title')
    title.textContent = 'Hot Keys'
    this.list = document.createElement('ul')
    this.list.textContent = 'Change language:'
    this.list.classList.add('hints__list')
    this.createListItem('For Mac: ', 'Control + ⌘ Command')
    this.createListItem('For Windows: ', '⇧ Shift + ⎵ Space')
    const text = document.createElement('p')
    text.classList.add('hints__text')
    text.textContent = 'Keyboard was made on Mac OS'
    this.container.append(title, this.list, text)
  }

  createListItem(firstText, secondText) {
    const item = document.createElement('li')
    item.classList.add('hints__item')
    const span = document.createElement('span')
    span.classList.add('hints__span')
    span.textContent = firstText
    const text = document.createElement('p')
    text.textContent = secondText
    item.append(text)
    text.prepend(span)
    this.list.append(item)
  }
}
