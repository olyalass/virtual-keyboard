import './style.scss'

export default class Footer {
  constructor() {
    this.item = document.createElement('footer')
    this.item.classList.add('footer')
    const text = document.createElement('p')
    text.classList.add('footer__text')
    text.textContent = 'Layout:  '
    this.eng = document.createElement('span')
    this.eng.classList.add('footer__span')
    this.eng.textContent = 'eng '
    this.croat = document.createElement('span')
    this.croat.classList.add('footer__span')
    this.croat.textContent = 'HR/SRB'
    text.append(this.eng, this.croat)
    const prevLang = localStorage.getItem('lang')
    if (prevLang) {
      this.lang = prevLang
    } else this.lang = 'eng'
    if (this.lang !== 'eng') {
      this.croat.classList.add('footer__span_selected')
    } else this.eng.classList.add('footer__span_selected')
    const date = document.createElement('p')
    date.classList.add('footer__text', 'footer__link')
    date.textContent = '2023'
    this.item.append(text, date)
  }

  onLangChange(lang) {
    this.lang = lang
    this.croat.classList.toggle('footer__span_selected')
    this.eng.classList.toggle('footer__span_selected')
  }
}
