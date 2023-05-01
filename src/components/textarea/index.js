import './style.scss'

export default class Textarea {
  constructor() {
    this.container = document.createElement('div')
    this.input = document.createElement('textarea')
    this.input.setAttribute('spellcheck', false)
    this.input.classList.add('textarea__input')
    this.container.append(this.input)

    this.cursor = this.input.selectionStart
    this.input.addEventListener('click', () => {
      this.cursor = this.input.selectionStart
    })
  }

  addChar(keyInfo, isCaps, lang) {
    if (keyInfo.key) {
      let key
      if (lang === 'eng') {
        if (isCaps && keyInfo.onShift) {
          key = keyInfo.onShift
        } else key = keyInfo.key
      } else if (isCaps) {
        if (keyInfo.langOnShift) {
          key = keyInfo.langOnShift
        } else if (keyInfo.onShift) {
          key = keyInfo.onShift
        } else if (keyInfo.lang) {
          key = keyInfo.land
        } else key = keyInfo.key
      } else if (keyInfo.lang) {
        key = keyInfo.lang
      } else key = keyInfo.key

      this.input.value =
        this.input.value.slice(0, this.cursor) +
        key +
        this.input.value.slice(this.cursor)
      this.cursor += 1
    } else {
      if (keyInfo.code === 'Backspace') {
        this.input.value =
          this.input.value.slice(0, this.cursor - 1) +
          this.input.value.slice(this.cursor)
        this.cursor -= 1
      } else if (keyInfo.code === 'Delete') {
        this.input.value =
          this.input.value.slice(0, this.cursor) +
          this.input.value.slice(this.cursor + 1)
      } else if (keyInfo.code === 'ArrowLeft') {
        this.moveCursor('left')
      } else if (keyInfo.code === 'ArrowRight') {
        this.moveCursor('right')
      }

      this.setFocus()

      if (keyInfo.code === 'ArrowUp') {
        this.setCursorUp()
      } else if (keyInfo.code === 'ArrowDown') {
        this.setCursorDown()
      }
    }
  }

  setCursorUp() {
    const lineStart = this.input.value.lastIndexOf('\n', this.cursor - 1)
    const gap = this.cursor - lineStart
    if (gap >= 95 || (lineStart === -1 && this.input.value.length > 95)) {
      this.cursor -= 95
    } else {
      const prevLineStart = this.input.value.lastIndexOf('\n', lineStart - 1)
      const prevLineLength = lineStart - prevLineStart
      if (prevLineLength < gap) {
        this.cursor = lineStart
      } else {
        this.cursor = prevLineStart + gap
      }
    }

    this.input.setSelectionRange(this.cursor, this.cursor)
  }

  setCursorDown() {
    const lineStart = this.input.value.lastIndexOf('\n', this.cursor - 1)
    const gap = this.cursor - lineStart
    const nextLineStart = this.input.value.indexOf('\n', lineStart + 1)
    if (gap >= 95 || (lineStart === -1 && this.input.value.length > 95)) {
      this.cursor += 95
    } else if (nextLineStart === -1) {
      this.cursor = this.input.value.length
    } else {
      let afterNextLine = this.input.value.indexOf('\n', nextLineStart + 1)
      if (afterNextLine === -1) {
        afterNextLine = this.input.value.length
      }
      const nextLineLength = afterNextLine - nextLineStart
      if (nextLineLength < gap) {
        this.cursor = nextLineStart + nextLineLength
      } else {
        this.cursor = nextLineStart + gap
      }
    }

    this.input.setSelectionRange(this.cursor, this.cursor)
  }

  setFocus() {
    this.input.focus()
    this.input.selectionStart = this.cursor
    this.input.selectionEnd = this.cursor
  }

  moveCursor(side) {
    if (side === 'left') {
      this.cursor -= 1
    } else this.cursor += 1
    this.setFocus()
  }
}
