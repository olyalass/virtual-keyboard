import './style.scss'
import Key from '../key'
import keys from './keys.json'

export default class Keyboard {
  constructor() {
    this.charKeysArr = []
    this.keysArr = []
    this.container = document.createElement('div')
    this.container.classList.add('keyboard__container')
    keys.forEach(e => {
      const key = new Key(e)
      if (e.type === 'char') {
        this.charKeysArr.push(key)
      }
      this.keysArr.push(key)
      this.container.append(key.container)
    })
    const lang = localStorage.getItem('lang')
    if (lang !== 'eng') this.changeNames(false, lang)
  }

  changeNames(isCaps, lang) {
    this.charKeysArr.forEach(e => {
      if (lang === 'eng') {
        if (isCaps && e.obj.onShift) {
          e.text.textContent = e.obj.onShift
        } else e.text.textContent = e.obj.key
      } else if (isCaps) {
        if (e.obj.langOnShift) {
          e.text.textContent = e.obj.langOnShift
        } else e.text.textContent = e.obj.onShift
      } else if (e.obj.lang) {
        e.text.textContent = e.obj.lang
      } else e.text.textContent = e.obj.key
    })
  }
}
