import './style.scss'

export default class Key {
  constructor(keyObj) {
    this.obj = keyObj
    this.container = document.createElement('div')
    this.container.classList.add('key__container')
    this.face = document.createElement('div')
    this.face.classList.add('key__face')
    this.text = document.createElement('p')
    this.text.classList.add('key__text')
    if (keyObj.type === 'char') {
      this.text.textContent = keyObj.key
    } else if (keyObj.name !== undefined) {
      this.text.textContent = keyObj.name
    } else this.text.textContent = keyObj.code
    this.face.append(this.text)
    switch (keyObj.size) {
      case 2:
        this.container.classList.add('key__container_s')
        break
      case 3:
        this.container.classList.add('key__container_event_m')
        break
      case 4:
        this.container.classList.add('key__container_event_l')
        break
      case 5:
        this.container.classList.add('key__container_event_xl')
        break
      case 1:
        this.container.classList.add('key__container_xs')
        break
    }
    this.container.append(this.face)
    if (keyObj.type === 'event') {
      if (keyObj.isArrow) {
        this.container.classList.add('key__container_arrow')
      } else this.container.classList.add('key__container_event')
    }

    this.container.addEventListener('click', () => {
      this.container.classList.add('key__container_clicked')
      this.container.classList.add('key__face_clicked')
      if (keyObj.code === 'CapsLock') {
        this.setOnMode()
      }
      const event = new CustomEvent('custom-key', {
        bubbles: true,
        detail: { obj: keyObj, isCaps: this.isCaps },
      })
      this.container.dispatchEvent(event)
      setTimeout(() => {
        this.container.classList.remove('key__container_clicked')
        this.container.classList.remove('key__face_clicked')
      }, 300)
    })
  }

  setOnMode() {
    this.face.classList.toggle('key__face_on')
    if (this.isCaps) {
      this.isCaps = false
    } else this.isCaps = true
  }
}
