(() => {
  "use strict";
  class t {
    constructor() {
      (this.container = document.createElement("div")),
        (this.input = document.createElement("textarea")),
        this.input.setAttribute("spellcheck", !1),
        this.input.classList.add("textarea__input"),
        this.container.append(this.input),
        (this.cursor = this.input.selectionStart),
        this.input.addEventListener("click", () => {
          this.cursor = this.input.selectionStart;
        });
    }
    addChar(t, e, n) {
      if (t.key) {
        let i;
        (i =
          "eng" === n
            ? e && t.onShift
              ? t.onShift
              : t.key
            : e
            ? t.langOnShift
              ? t.langOnShift
              : t.onShift
              ? t.onShift
              : t.lang
              ? t.land
              : t.key
            : t.lang
            ? t.lang
            : t.key),
          (this.input.value =
            this.input.value.slice(0, this.cursor) +
            i +
            this.input.value.slice(this.cursor)),
          (this.cursor += 1);
      } else
        "ArrowUp" === t.code && this.setCursorUp(),
          "ArrowDown" === t.code && this.setCursorDown(),
          this.setFocus(),
          "Backspace" === t.code
            ? ((this.input.value =
                this.input.value.slice(0, this.cursor - 1) +
                this.input.value.slice(this.cursor)),
              (this.cursor -= 1))
            : "Delete" === t.code
            ? (this.input.value =
                this.input.value.slice(0, this.cursor) +
                this.input.value.slice(this.cursor + 1))
            : "ArrowLeft" === t.code
            ? this.moveCursor("left")
            : "ArrowRight" === t.code && this.moveCursor("right");
    }
    setCursorUp() {
      const t = this.input.value.lastIndexOf("\n", this.cursor - 1),
        e = this.cursor - t;
      if (e >= 95 || (-1 === t && this.input.value.length > 95))
        this.cursor -= 95;
      else if (-1 === t) this.cursor = 0;
      else {
        const n = this.input.value.lastIndexOf("\n", t - 1),
          i = t - n;
        this.cursor = i < e ? t : n + e;
      }
      this.input.setSelectionRange(this.cursor, this.cursor);
    }
    setCursorDown() {
      const t = this.input.value.lastIndexOf("\n", this.cursor - 1),
        e = this.cursor - t,
        n = this.input.value.indexOf("\n", t + 1);
      if (e >= 95 || (-1 === t && this.input.value.length > 95))
        this.cursor += 95;
      else if (-1 === n) this.cursor = this.input.value.length;
      else {
        let t = this.input.value.indexOf("\n", n + 1);
        -1 === t && (t = this.input.value.length);
        const i = t - n;
        this.cursor = i < e ? n + i : n + e;
      }
      this.input.setSelectionRange(this.cursor, this.cursor);
    }
    setFocus() {
      this.input.focus(),
        (this.input.selectionStart = this.cursor),
        (this.input.selectionEnd = this.cursor);
    }
    moveCursor(t) {
      "left" === t ? (this.cursor -= 1) : (this.cursor += 1), this.setFocus();
    }
  }
  class e {
    constructor(t) {
      switch (
        ((this.obj = t),
        (this.container = document.createElement("div")),
        this.container.classList.add("key__container"),
        (this.face = document.createElement("div")),
        this.face.classList.add("key__face"),
        (this.text = document.createElement("p")),
        this.text.classList.add("key__text"),
        "char" === t.type
          ? (this.text.textContent = t.key)
          : void 0 !== t.name
          ? (this.text.textContent = t.name)
          : (this.text.textContent = t.code),
        this.face.append(this.text),
        t.size)
      ) {
        case 2:
          this.container.classList.add("key__container_s");
          break;
        case 3:
          this.container.classList.add("key__container_event_m");
          break;
        case 4:
          this.container.classList.add("key__container_event_l");
          break;
        case 5:
          this.container.classList.add("key__container_event_xl");
          break;
        case 1:
          this.container.classList.add("key__container_xs");
      }
      this.container.append(this.face),
        "event" === t.type &&
          (t.isArrow
            ? this.container.classList.add("key__container_arrow")
            : this.container.classList.add("key__container_event")),
        this.container.addEventListener("mousedown", () => {
          this.container.classList.add("key__container_clicked"),
            this.container.classList.add("key__face_clicked"),
            "CapsLock" === t.code && this.setOnMode();
          const e = new CustomEvent("custom-key", {
            bubbles: !0,
            detail: { obj: t, isCaps: this.isCaps },
          });
          this.container.dispatchEvent(e);
        }),
        this.container.addEventListener("mouseup", () => {
          setTimeout(() => {
            this.container.classList.remove("key__container_clicked"),
              this.container.classList.remove("key__face_clicked");
          }, 100);
        });
    }
    setOnMode() {
      this.face.classList.toggle("key__face_on"),
        this.isCaps ? (this.isCaps = !1) : (this.isCaps = !0);
    }
  }
  const n = JSON.parse(
    '[{"code":"Backquote","key":"`","type":"char","onShift":"~","lang":"¨","langOnShift":"¸"},{"code":"Digit1","key":"1","type":"char","onShift":"!"},{"code":"Digit2","key":"2","type":"char","onShift":"@","langOnShift":"\\""},{"code":"Digit3","key":"3","type":"char","onShift":"#"},{"code":"Digit4","key":"4","type":"char","onShift":"$"},{"code":"Digit5","key":"5","type":"char","onShift":"%"},{"code":"Digit6","key":"6","type":"char","onShift":"^","langOnShift":"&"},{"code":"Digit7","key":"7","type":"char","onShift":"&","langOnShift":"/"},{"code":"Digit8","key":"8","type":"char","onShift":"*","langOnShift":"("},{"code":"Digit9","key":"9","type":"char","onShift":"(","langOnShift":")"},{"code":"Digit0","key":"0","type":"char","onShift":")","langOnShift":"="},{"code":"Minus","key":"-","type":"char","onShift":"_","lang":"\'","langOnShift":"?"},{"code":"Equal","key":"=","type":"char","onShift":"+","lang":"+","langOnShift":"*"},{"code":"Backspace","type":"event","size":3,"name":"⟵"},{"code":"Tab","type":"event","key":"\\t","size":2},{"code":"KeyQ","key":"q","type":"char","onShift":"Q"},{"code":"KeyW","key":"w","type":"char","onShift":"W"},{"code":"KeyE","key":"e","type":"char","onShift":"E"},{"code":"KeyR","key":"r","type":"char","onShift":"R"},{"code":"KeyT","key":"t","type":"char","onShift":"T"},{"code":"KeyY","key":"y","type":"char","onShift":"Y","lang":"z","langOnShift":"Z"},{"code":"KeyU","key":"u","type":"char","onShift":"U"},{"code":"KeyI","key":"i","type":"char","onShift":"I"},{"code":"KeyO","key":"o","type":"char","onShift":"O"},{"code":"KeyP","key":"p","type":"char","onShift":"P"},{"code":"BracketLeft","key":"[","type":"char","onShift":"{","lang":"š","langOnShift":"Š"},{"code":"BracketRight","key":"]","type":"char","onShift":"}","lang":"đ","langOnShift":"Đ"},{"code":"Backslash","key":"\\\\","type":"char","onShift":"|","lang":"ž","langOnShift":"Ž","size":2},{"code":"CapsLock","type":"event","size":3},{"code":"KeyA","key":"a","type":"char","onShift":"A"},{"code":"KeyS","key":"s","type":"char","onShift":"S"},{"code":"KeyD","key":"d","type":"char","onShift":"D"},{"code":"KeyF","key":"f","type":"char","onShift":"F"},{"code":"KeyG","key":"g","type":"char","onShift":"G"},{"code":"KeyH","key":"h","type":"char","onShift":"H"},{"code":"KeyJ","key":"j","type":"char","onShift":"J"},{"code":"KeyK","key":"k","type":"char","onShift":"K"},{"code":"KeyL","key":"l","type":"char","onShift":"L"},{"code":"Semicolon","key":";","type":"char","onShift":":","lang":"č","langOnShift":"Č"},{"code":"Quote","key":"\'","type":"char","onShift":"\\"","lang":"č","langOnShift":"Č"},{"code":"Enter","type":"event","key":"\\n","size":3},{"code":"ShiftLeft","type":"event","name":"shift","size":4},{"code":"KeyZ","key":"z","type":"char","onShift":"Z","lang":"y","langOnShift":"Y"},{"code":"KeyX","key":"x","type":"char","onShift":"X"},{"code":"KeyC","key":"c","type":"char","onShift":"C"},{"code":"KeyV","key":"v","type":"char","onShift":"V"},{"code":"KeyB","key":"b","type":"char","onShift":"B"},{"code":"KeyN","key":"n","type":"char","onShift":"N"},{"code":"KeyM","key":"m","type":"char","onShift":"M"},{"code":"Comma","key":",","type":"char","onShift":"<","langOnShift":";"},{"code":"Period","key":".","type":"char","onShift":">","langOnShift":":"},{"code":"Slash","key":"/","type":"char","onShift":"?","lang":"-","langOnShift":"_"},{"code":"ArrowUp","type":"event","name":"⇧","isArrow":true},{"code":"Delete","type":"event","name":"del","size":2},{"code":"ControlLeft","type":"event","name":"ctrl","size":1},{"code":"AltLeft","type":"event","name":"alt","size":1},{"code":"MetaLeft","type":"event","name":"⌘","size":1},{"code":"Space","type":"event","key":" ","name":"","size":5},{"code":"MetaRight","type":"event","name":"⌘","size":1},{"code":"ArrowLeft","type":"event","name":"⇦","isArrow":true},{"code":"ArrowDown","type":"event","name":"⇩","isArrow":true},{"code":"ArrowRight","type":"event","name":"⇨","isArrow":true}]'
  );
  class i {
    constructor() {
      (this.charKeysArr = []),
        (this.keysArr = []),
        (this.container = document.createElement("div")),
        this.container.classList.add("keyboard__container"),
        n.forEach((t) => {
          const n = new e(t);
          "char" === t.type && this.charKeysArr.push(n),
            this.keysArr.push(n),
            this.container.append(n.container);
        });
      const t = localStorage.getItem("lang");
      "eng" !== t && this.changeNames(!1, t);
    }
    changeNames(t, e) {
      this.charKeysArr.forEach((n) => {
        "eng" === e
          ? t && n.obj.onShift
            ? (n.text.textContent = n.obj.onShift)
            : (n.text.textContent = n.obj.key)
          : t
          ? n.obj.langOnShift
            ? (n.text.textContent = n.obj.langOnShift)
            : (n.text.textContent = n.obj.onShift)
          : n.obj.lang
          ? (n.text.textContent = n.obj.lang)
          : (n.text.textContent = n.obj.key);
      });
    }
  }
  class s {
    constructor() {
      (this.container = document.createElement("aside")),
        this.container.classList.add("hints__container");
      const t = document.createElement("h2");
      t.classList.add("hints__title"),
        (t.textContent = "Hot Keys"),
        (this.list = document.createElement("ul")),
        (this.list.textContent = "Change language:"),
        this.list.classList.add("hints__list"),
        this.createListItem("For Mac: ", "Control + ⌘ Command"),
        this.createListItem("For Windows: ", "⇧ Shift + ⎵ Space");
      const e = document.createElement("p");
      e.classList.add("hints__text"),
        (e.textContent = "Keyboard was made on Mac OS"),
        this.container.append(t, this.list, e);
    }
    createListItem(t, e) {
      const n = document.createElement("li");
      n.classList.add("hints__item");
      const i = document.createElement("span");
      i.classList.add("hints__span"), (i.textContent = t);
      const s = document.createElement("p");
      (s.textContent = e), n.append(s), s.prepend(i), this.list.append(n);
    }
  }
  class a {
    constructor() {
      (this.item = document.createElement("header")),
        this.item.classList.add("header");
      const t = document.createElement("h1");
      t.classList.add("header__title"), (t.textContent = "Virtual Keyboard");
      const e = document.createElement("p");
      e.classList.add("header__note"), (e.textContent = "Info");
      const n = new s(),
        i = document.createElement("div");
      i.classList.add("header__cover"),
        this.item.append(t, e, n.container, i),
        e.addEventListener("click", () => {
          n.container.classList.toggle("hints__container_open");
        });
    }
  }
  class o {
    constructor() {
      (this.item = document.createElement("footer")),
        this.item.classList.add("footer");
      const t = document.createElement("p");
      t.classList.add("footer__text"),
        (t.textContent = "Layout:  "),
        (this.eng = document.createElement("span")),
        this.eng.classList.add("footer__span"),
        (this.eng.textContent = "eng "),
        (this.croat = document.createElement("span")),
        this.croat.classList.add("footer__span"),
        (this.croat.textContent = "HR/SRB"),
        t.append(this.eng, this.croat);
      const e = localStorage.getItem("lang");
      (this.lang = e || "eng"),
        "eng" !== this.lang
          ? this.croat.classList.add("footer__span_selected")
          : this.eng.classList.add("footer__span_selected");
      const n = document.createElement("p");
      n.classList.add("footer__text", "footer__link"),
        (n.textContent = "2023"),
        this.item.append(t, n);
    }
    onLangChange(t) {
      (this.lang = t),
        this.croat.classList.toggle("footer__span_selected"),
        this.eng.classList.toggle("footer__span_selected");
    }
  }
  const c = document.querySelector("body"),
    h = new (class {
      constructor() {
        (this.container = document.createElement("div")),
          this.container.classList.add("app");
        const e = localStorage.getItem("lang");
        this.lang = e || "eng";
        const n = new a();
        (this.footer = new o()),
          (this.textarea = new t()),
          (this.keyboard = new i()),
          this.container.append(
            n.item,
            this.textarea.container,
            this.keyboard.container,
            this.footer.item
          ),
          this.container.addEventListener("custom-key", (t) => {
            this.onVirtualKey(t.detail.isCaps, t.detail.obj);
          }),
          document.addEventListener("keydown", (t) => {
            let e = this.keyboard.keysArr.find((e) => e.obj.code === t.code);
            "ShiftRight" === t.code &&
              (e = this.keyboard.keysArr.find(
                (t) => "ShiftLeft" === t.obj.code
              )),
              e &&
                (e.container.classList.add("key__container_clicked"),
                (t.ctrlKey && t.metaKey) || (t.shiftKey && "Space" === t.code)
                  ? (t.preventDefault(), this.changeLang())
                  : t.key &&
                    (t.preventDefault(), this.onVirtualKey(e.isCaps, e.obj)),
                "CapsLock" === t.code && e.container.click(),
                ("ShiftLeft" !== t.code && "ShiftRight" !== t.code) ||
                  (this.isCaps
                    ? this.onVirtualKey(!1, e.obj)
                    : this.onVirtualKey(!0, e.obj)));
          }),
          document.addEventListener("keyup", (t) => {
            let e = this.keyboard.keysArr.find((e) => e.obj.code === t.code);
            "ShiftRight" === t.code &&
              (e = this.keyboard.keysArr.find(
                (t) => "ShiftLeft" === t.obj.code
              )),
              e &&
                (e.container.classList.remove("key__container_clicked"),
                "CapsLock" === t.code && e.container.click(),
                ("ShiftLeft" !== t.code && "ShiftRight" !== t.code) ||
                  (this.isCaps
                    ? this.onVirtualKey(!1, e.obj)
                    : this.onVirtualKey(!0, e.obj)));
          });
      }
      changeLang() {
        "eng" === this.lang ? (this.lang = "hr") : (this.lang = "eng"),
          this.footer.onLangChange(this.lang),
          this.keyboard.changeNames(this.isCaps, this.lang),
          localStorage.setItem("lang", this.lang);
      }
      onVirtualKey(t, e) {
        void 0 !== t &&
          ((this.isCaps = t),
          this.keyboard.changeNames(this.isCaps, this.lang)),
          this.textarea.addChar(e, this.isCaps, this.lang);
      }
    })();
  c.append(h.container);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSytGLFNBQVNoQyxRQUFRbUMsTUFDckNsQyxHQUFLQSxFQUFFckIsSUFBSXJCLE9BQVMrQixFQUFNL0IsT0FFVCxlQUFmK0IsRUFBTS9CLE9BQ1IyRSxFQUFhakcsS0FBSytGLFNBQVNoQyxRQUFRbUMsTUFBS2xDLEdBQW9CLGNBQWZBLEVBQUVyQixJQUFJckIsUUFFakQyRSxJQUNGQSxFQUFXaEcsVUFBVUssVUFBVXFELE9BQU8sMEJBQ25CLGFBQWZOLEVBQU0vQixNQUNSMkUsRUFBV2hHLFVBQVV1RyxRQUVKLGNBQWZuRCxFQUFNL0IsTUFBdUMsZUFBZitCLEVBQU0vQixPQUNsQ3RCLEtBQUtjLE9BQ1BkLEtBQUtnRyxjQUFhLEVBQU9DLEVBQVd0RCxLQUMvQjNDLEtBQUtnRyxjQUFhLEVBQU1DLEVBQVd0RCxNQUU5QyxHQUVKLENBRUE0RCxhQUNvQixRQUFkdkcsS0FBS2UsS0FDUGYsS0FBS2UsS0FBTyxLQUNQZixLQUFLZSxLQUFPLE1BQ25CZixLQUFLNkYsT0FBT0wsYUFBYXhGLEtBQUtlLE1BQzlCZixLQUFLK0YsU0FBUzNCLFlBQVlwRSxLQUFLYyxPQUFRZCxLQUFLZSxNQUM1Q21ELGFBQWF1QyxRQUFRLE9BQVF6RyxLQUFLZSxLQUNwQyxDQUVBaUYsYUFBYWxGLEVBQVE2QixRQUNKSyxJQUFYbEMsSUFDRmQsS0FBS2MsT0FBU0EsRUFDZGQsS0FBSytGLFNBQVMzQixZQUFZcEUsS0FBS2MsT0FBUWQsS0FBS2UsT0FFOUNmLEtBQUs4RixTQUFTbEYsUUFBUStCLEVBQUszQyxLQUFLYyxPQUFRZCxLQUFLZSxLQUMvQyxHRC9GRjBFLEVBQUtqRixPQUFPbUYsRUFBSTFGLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGludHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKVxuICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWFfX2lucHV0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuY3Vyc29yID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydFxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnNvciA9IHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgICB9KVxuICB9XG5cbiAgYWRkQ2hhcihrZXlJbmZvLCBpc0NhcHMsIGxhbmcpIHtcbiAgICBpZiAoa2V5SW5mby5rZXkpIHtcbiAgICAgIGxldCBrZXlcbiAgICAgIGlmIChsYW5nID09PSAnZW5nJykge1xuICAgICAgICBpZiAoaXNDYXBzICYmIGtleUluZm8ub25TaGlmdCkge1xuICAgICAgICAgIGtleSA9IGtleUluZm8ub25TaGlmdFxuICAgICAgICB9IGVsc2Uga2V5ID0ga2V5SW5mby5rZXlcbiAgICAgIH0gZWxzZSBpZiAoaXNDYXBzKSB7XG4gICAgICAgIGlmIChrZXlJbmZvLmxhbmdPblNoaWZ0KSB7XG4gICAgICAgICAga2V5ID0ga2V5SW5mby5sYW5nT25TaGlmdFxuICAgICAgICB9IGVsc2UgaWYgKGtleUluZm8ub25TaGlmdCkge1xuICAgICAgICAgIGtleSA9IGtleUluZm8ub25TaGlmdFxuICAgICAgICB9IGVsc2UgaWYgKGtleUluZm8ubGFuZykge1xuICAgICAgICAgIGtleSA9IGtleUluZm8ubGFuZFxuICAgICAgICB9IGVsc2Uga2V5ID0ga2V5SW5mby5rZXlcbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5mby5sYW5nKSB7XG4gICAgICAgIGtleSA9IGtleUluZm8ubGFuZ1xuICAgICAgfSBlbHNlIGtleSA9IGtleUluZm8ua2V5XG5cbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPVxuICAgICAgICB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKDAsIHRoaXMuY3Vyc29yKSArXG4gICAgICAgIGtleSArXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUuc2xpY2UodGhpcy5jdXJzb3IpXG4gICAgICB0aGlzLmN1cnNvciArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXlJbmZvLmNvZGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgICB0aGlzLnNldEN1cnNvclVwKClcbiAgICAgIH1cbiAgICAgIGlmIChrZXlJbmZvLmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuc2V0Q3Vyc29yRG93bigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXMoKVxuXG4gICAgICBpZiAoa2V5SW5mby5jb2RlID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID1cbiAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKDAsIHRoaXMuY3Vyc29yIC0gMSkgK1xuICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUuc2xpY2UodGhpcy5jdXJzb3IpXG4gICAgICAgIHRoaXMuY3Vyc29yIC09IDFcbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5mby5jb2RlID09PSAnRGVsZXRlJykge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID1cbiAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlLnNsaWNlKDAsIHRoaXMuY3Vyc29yKSArXG4gICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZS5zbGljZSh0aGlzLmN1cnNvciArIDEpXG4gICAgICB9IGVsc2UgaWYgKGtleUluZm8uY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKCdsZWZ0JylcbiAgICAgIH0gZWxzZSBpZiAoa2V5SW5mby5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgdGhpcy5tb3ZlQ3Vyc29yKCdyaWdodCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q3Vyc29yVXAoKSB7XG4gICAgY29uc3QgbGluZVN0YXJ0ID0gdGhpcy5pbnB1dC52YWx1ZS5sYXN0SW5kZXhPZignXFxuJywgdGhpcy5jdXJzb3IgLSAxKVxuICAgIGNvbnN0IGdhcCA9IHRoaXMuY3Vyc29yIC0gbGluZVN0YXJ0XG4gICAgaWYgKGdhcCA+PSA5NSB8fCAobGluZVN0YXJ0ID09PSAtMSAmJiB0aGlzLmlucHV0LnZhbHVlLmxlbmd0aCA+IDk1KSkge1xuICAgICAgdGhpcy5jdXJzb3IgLT0gOTVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxpbmVTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5jdXJzb3IgPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2TGluZVN0YXJ0ID0gdGhpcy5pbnB1dC52YWx1ZS5sYXN0SW5kZXhPZignXFxuJywgbGluZVN0YXJ0IC0gMSlcbiAgICAgICAgY29uc3QgcHJldkxpbmVMZW5ndGggPSBsaW5lU3RhcnQgLSBwcmV2TGluZVN0YXJ0XG4gICAgICAgIGlmIChwcmV2TGluZUxlbmd0aCA8IGdhcCkge1xuICAgICAgICAgIHRoaXMuY3Vyc29yID0gbGluZVN0YXJ0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJzb3IgPSBwcmV2TGluZVN0YXJ0ICsgZ2FwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHRoaXMuY3Vyc29yLCB0aGlzLmN1cnNvcilcbiAgfVxuXG4gIHNldEN1cnNvckRvd24oKSB7XG4gICAgY29uc3QgbGluZVN0YXJ0ID0gdGhpcy5pbnB1dC52YWx1ZS5sYXN0SW5kZXhPZignXFxuJywgdGhpcy5jdXJzb3IgLSAxKVxuICAgIGNvbnN0IGdhcCA9IHRoaXMuY3Vyc29yIC0gbGluZVN0YXJ0XG4gICAgY29uc3QgbmV4dExpbmVTdGFydCA9IHRoaXMuaW5wdXQudmFsdWUuaW5kZXhPZignXFxuJywgbGluZVN0YXJ0ICsgMSlcbiAgICBpZiAoZ2FwID49IDk1IHx8IChsaW5lU3RhcnQgPT09IC0xICYmIHRoaXMuaW5wdXQudmFsdWUubGVuZ3RoID4gOTUpKSB7XG4gICAgICB0aGlzLmN1cnNvciArPSA5NVxuICAgIH0gZWxzZSBpZiAobmV4dExpbmVTdGFydCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5pbnB1dC52YWx1ZS5sZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGFmdGVyTmV4dExpbmUgPSB0aGlzLmlucHV0LnZhbHVlLmluZGV4T2YoJ1xcbicsIG5leHRMaW5lU3RhcnQgKyAxKVxuICAgICAgaWYgKGFmdGVyTmV4dExpbmUgPT09IC0xKSB7XG4gICAgICAgIGFmdGVyTmV4dExpbmUgPSB0aGlzLmlucHV0LnZhbHVlLmxlbmd0aFxuICAgICAgfVxuICAgICAgY29uc3QgbmV4dExpbmVMZW5ndGggPSBhZnRlck5leHRMaW5lIC0gbmV4dExpbmVTdGFydFxuICAgICAgaWYgKG5leHRMaW5lTGVuZ3RoIDwgZ2FwKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gbmV4dExpbmVTdGFydCArIG5leHRMaW5lTGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnNvciA9IG5leHRMaW5lU3RhcnQgKyBnYXBcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHRoaXMuY3Vyc29yLCB0aGlzLmN1cnNvcilcbiAgfVxuXG4gIHNldEZvY3VzKCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKVxuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmN1cnNvclxuICAgIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kID0gdGhpcy5jdXJzb3JcbiAgfVxuXG4gIG1vdmVDdXJzb3Ioc2lkZSkge1xuICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuY3Vyc29yIC09IDFcbiAgICB9IGVsc2UgdGhpcy5jdXJzb3IgKz0gMVxuICAgIHRoaXMuc2V0Rm9jdXMoKVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5IHtcbiAgY29uc3RydWN0b3Ioa2V5T2JqKSB7XG4gICAgdGhpcy5vYmogPSBrZXlPYmpcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5X19jb250YWluZXInKVxuICAgIHRoaXMuZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5mYWNlLmNsYXNzTGlzdC5hZGQoJ2tleV9fZmFjZScpXG4gICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy50ZXh0LmNsYXNzTGlzdC5hZGQoJ2tleV9fdGV4dCcpXG4gICAgaWYgKGtleU9iai50eXBlID09PSAnY2hhcicpIHtcbiAgICAgIHRoaXMudGV4dC50ZXh0Q29udGVudCA9IGtleU9iai5rZXlcbiAgICB9IGVsc2UgaWYgKGtleU9iai5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGV4dC50ZXh0Q29udGVudCA9IGtleU9iai5uYW1lXG4gICAgfSBlbHNlIHRoaXMudGV4dC50ZXh0Q29udGVudCA9IGtleU9iai5jb2RlXG4gICAgdGhpcy5mYWNlLmFwcGVuZCh0aGlzLnRleHQpXG4gICAgc3dpdGNoIChrZXlPYmouc2l6ZSkge1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlfX2NvbnRhaW5lcl9zJylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5X19jb250YWluZXJfZXZlbnRfbScpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2tleV9fY29udGFpbmVyX2V2ZW50X2wnKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA1OlxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlfX2NvbnRhaW5lcl9ldmVudF94bCcpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2tleV9fY29udGFpbmVyX3hzJylcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuZmFjZSlcbiAgICBpZiAoa2V5T2JqLnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGlmIChrZXlPYmouaXNBcnJvdykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlfX2NvbnRhaW5lcl9hcnJvdycpXG4gICAgICB9IGVsc2UgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5X19jb250YWluZXJfZXZlbnQnKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2tleV9fY29udGFpbmVyX2NsaWNrZWQnKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5X19mYWNlX2NsaWNrZWQnKVxuICAgICAgaWYgKGtleU9iai5jb2RlID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICAgIHRoaXMuc2V0T25Nb2RlKClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjdXN0b20ta2V5Jywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHsgb2JqOiBrZXlPYmosIGlzQ2FwczogdGhpcy5pc0NhcHMgfSxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdrZXlfX2NvbnRhaW5lcl9jbGlja2VkJylcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgna2V5X19mYWNlX2NsaWNrZWQnKVxuICAgICAgfSwgMTAwKVxuICAgIH0pXG4gIH1cblxuICBzZXRPbk1vZGUoKSB7XG4gICAgdGhpcy5mYWNlLmNsYXNzTGlzdC50b2dnbGUoJ2tleV9fZmFjZV9vbicpXG4gICAgaWYgKHRoaXMuaXNDYXBzKSB7XG4gICAgICB0aGlzLmlzQ2FwcyA9IGZhbHNlXG4gICAgfSBlbHNlIHRoaXMuaXNDYXBzID0gdHJ1ZVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBLZXkgZnJvbSAnLi4va2V5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGFyS2V5c0FyciA9IFtdXG4gICAgdGhpcy5rZXlzQXJyID0gW11cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2NvbnRhaW5lcicpXG4gICAga2V5cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gbmV3IEtleShlKVxuICAgICAgaWYgKGUudHlwZSA9PT0gJ2NoYXInKSB7XG4gICAgICAgIHRoaXMuY2hhcktleXNBcnIucHVzaChrZXkpXG4gICAgICB9XG4gICAgICB0aGlzLmtleXNBcnIucHVzaChrZXkpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoa2V5LmNvbnRhaW5lcilcbiAgICB9KVxuICAgIGNvbnN0IGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpXG4gICAgaWYgKGxhbmcgIT09ICdlbmcnKSB0aGlzLmNoYW5nZU5hbWVzKGZhbHNlLCBsYW5nKVxuICB9XG5cbiAgY2hhbmdlTmFtZXMoaXNDYXBzLCBsYW5nKSB7XG4gICAgdGhpcy5jaGFyS2V5c0Fyci5mb3JFYWNoKGUgPT4ge1xuICAgICAgaWYgKGxhbmcgPT09ICdlbmcnKSB7XG4gICAgICAgIGlmIChpc0NhcHMgJiYgZS5vYmoub25TaGlmdCkge1xuICAgICAgICAgIGUudGV4dC50ZXh0Q29udGVudCA9IGUub2JqLm9uU2hpZnRcbiAgICAgICAgfSBlbHNlIGUudGV4dC50ZXh0Q29udGVudCA9IGUub2JqLmtleVxuICAgICAgfSBlbHNlIGlmIChpc0NhcHMpIHtcbiAgICAgICAgaWYgKGUub2JqLmxhbmdPblNoaWZ0KSB7XG4gICAgICAgICAgZS50ZXh0LnRleHRDb250ZW50ID0gZS5vYmoubGFuZ09uU2hpZnRcbiAgICAgICAgfSBlbHNlIGUudGV4dC50ZXh0Q29udGVudCA9IGUub2JqLm9uU2hpZnRcbiAgICAgIH0gZWxzZSBpZiAoZS5vYmoubGFuZykge1xuICAgICAgICBlLnRleHQudGV4dENvbnRlbnQgPSBlLm9iai5sYW5nXG4gICAgICB9IGVsc2UgZS50ZXh0LnRleHRDb250ZW50ID0gZS5vYmoua2V5XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpbnRzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGludHNfX2NvbnRhaW5lcicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGludHNfX3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdIb3QgS2V5cydcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdGhpcy5saXN0LnRleHRDb250ZW50ID0gJ0NoYW5nZSBsYW5ndWFnZTonXG4gICAgdGhpcy5saXN0LmNsYXNzTGlzdC5hZGQoJ2hpbnRzX19saXN0JylcbiAgICB0aGlzLmNyZWF0ZUxpc3RJdGVtKCdGb3IgTWFjOiAnLCAnQ29udHJvbCArIOKMmCBDb21tYW5kJylcbiAgICB0aGlzLmNyZWF0ZUxpc3RJdGVtKCdGb3IgV2luZG93czogJywgJ+KHpyBTaGlmdCArIOKOtSBTcGFjZScpXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnaGludHNfX3RleHQnKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSAnS2V5Ym9hcmQgd2FzIG1hZGUgb24gTWFjIE9TJ1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgdGhpcy5saXN0LCB0ZXh0KVxuICB9XG5cbiAgY3JlYXRlTGlzdEl0ZW0oZmlyc3RUZXh0LCBzZWNvbmRUZXh0KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpbnRzX19pdGVtJylcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoaW50c19fc3BhbicpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGZpcnN0VGV4dFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gc2Vjb25kVGV4dFxuICAgIGl0ZW0uYXBwZW5kKHRleHQpXG4gICAgdGV4dC5wcmVwZW5kKHNwYW4pXG4gICAgdGhpcy5saXN0LmFwcGVuZChpdGVtKVxuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBIaW50cyBmcm9tICcuLi9oaW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICB0aGlzLml0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdWaXJ0dWFsIEtleWJvYXJkJ1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBub3RlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbm90ZScpXG4gICAgbm90ZS50ZXh0Q29udGVudCA9ICdJbmZvJ1xuICAgIGNvbnN0IGhpbnRzID0gbmV3IEhpbnRzKClcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19jb3ZlcicpXG4gICAgdGhpcy5pdGVtLmFwcGVuZCh0aXRsZSwgbm90ZSwgaGludHMuY29udGFpbmVyLCBjb3ZlcilcbiAgICBub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGludHMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpbnRzX19jb250YWluZXJfb3BlbicpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgdGhpcy5pdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX190ZXh0JylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0xheW91dDogICdcbiAgICB0aGlzLmVuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRoaXMuZW5nLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fc3BhbicpXG4gICAgdGhpcy5lbmcudGV4dENvbnRlbnQgPSAnZW5nICdcbiAgICB0aGlzLmNyb2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGhpcy5jcm9hdC5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3NwYW4nKVxuICAgIHRoaXMuY3JvYXQudGV4dENvbnRlbnQgPSAnSFIvU1JCJ1xuICAgIHRleHQuYXBwZW5kKHRoaXMuZW5nLCB0aGlzLmNyb2F0KVxuICAgIGNvbnN0IHByZXZMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKVxuICAgIGlmIChwcmV2TGFuZykge1xuICAgICAgdGhpcy5sYW5nID0gcHJldkxhbmdcbiAgICB9IGVsc2UgdGhpcy5sYW5nID0gJ2VuZydcbiAgICBpZiAodGhpcy5sYW5nICE9PSAnZW5nJykge1xuICAgICAgdGhpcy5jcm9hdC5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3NwYW5fc2VsZWN0ZWQnKVxuICAgIH0gZWxzZSB0aGlzLmVuZy5jbGFzc0xpc3QuYWRkKCdmb290ZXJfX3NwYW5fc2VsZWN0ZWQnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fdGV4dCcsICdmb290ZXJfX2xpbmsnKVxuICAgIGRhdGUudGV4dENvbnRlbnQgPSAnMjAyMydcbiAgICB0aGlzLml0ZW0uYXBwZW5kKHRleHQsIGRhdGUpXG4gIH1cblxuICBvbkxhbmdDaGFuZ2UobGFuZykge1xuICAgIHRoaXMubGFuZyA9IGxhbmdcbiAgICB0aGlzLmNyb2F0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvb3Rlcl9fc3Bhbl9zZWxlY3RlZCcpXG4gICAgdGhpcy5lbmcuY2xhc3NMaXN0LnRvZ2dsZSgnZm9vdGVyX19zcGFuX3NlbGVjdGVkJylcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBhcHAgPSBuZXcgQXBwKClcbnJvb3QuYXBwZW5kKGFwcC5jb250YWluZXIpXG4iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEnXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2tleWJvYXJkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwJylcbiAgICBjb25zdCBwcmV2TGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJylcbiAgICBpZiAocHJldkxhbmcpIHtcbiAgICAgIHRoaXMubGFuZyA9IHByZXZMYW5nXG4gICAgfSBlbHNlIHRoaXMubGFuZyA9ICdlbmcnXG5cbiAgICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKClcbiAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKVxuXG4gICAgdGhpcy50ZXh0YXJlYSA9IG5ldyBUZXh0YXJlYSgpXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICBoZWFkZXIuaXRlbSxcbiAgICAgIHRoaXMudGV4dGFyZWEuY29udGFpbmVyLFxuICAgICAgdGhpcy5rZXlib2FyZC5jb250YWluZXIsXG4gICAgICB0aGlzLmZvb3Rlci5pdGVtXG4gICAgKVxuXG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY3VzdG9tLWtleScsIGUgPT4ge1xuICAgICAgdGhpcy5vblZpcnR1YWxLZXkoZS5kZXRhaWwuaXNDYXBzLCBlLmRldGFpbC5vYmopXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICBsZXQgdmlydHVhbEtleSA9IHRoaXMua2V5Ym9hcmQua2V5c0Fyci5maW5kKFxuICAgICAgICBlID0+IGUub2JqLmNvZGUgPT09IGV2ZW50LmNvZGVcbiAgICAgIClcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgICAgdmlydHVhbEtleSA9IHRoaXMua2V5Ym9hcmQua2V5c0Fyci5maW5kKGUgPT4gZS5vYmouY29kZSA9PT0gJ1NoaWZ0TGVmdCcpXG4gICAgICB9XG4gICAgICBpZiAodmlydHVhbEtleSkge1xuICAgICAgICB2aXJ0dWFsS2V5LmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlfX2NvbnRhaW5lcl9jbGlja2VkJylcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChldmVudC5jdHJsS2V5ICYmIGV2ZW50Lm1ldGFLZXkpIHx8XG4gICAgICAgICAgKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmNvZGUgPT09ICdTcGFjZScpXG4gICAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmcoKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLm9uVmlydHVhbEtleSh2aXJ0dWFsS2V5LmlzQ2FwcywgdmlydHVhbEtleS5vYmopXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgICAgICB2aXJ0dWFsS2V5LmNvbnRhaW5lci5jbGljaygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGV2ZW50LmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQ2Fwcykge1xuICAgICAgICAgICAgdGhpcy5vblZpcnR1YWxLZXkoZmFsc2UsIHZpcnR1YWxLZXkub2JqKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uVmlydHVhbEtleSh0cnVlLCB2aXJ0dWFsS2V5Lm9iailcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICBsZXQgdmlydHVhbEtleSA9IHRoaXMua2V5Ym9hcmQua2V5c0Fyci5maW5kKFxuICAgICAgICBlID0+IGUub2JqLmNvZGUgPT09IGV2ZW50LmNvZGVcbiAgICAgIClcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgICAgdmlydHVhbEtleSA9IHRoaXMua2V5Ym9hcmQua2V5c0Fyci5maW5kKGUgPT4gZS5vYmouY29kZSA9PT0gJ1NoaWZ0TGVmdCcpXG4gICAgICB9XG4gICAgICBpZiAodmlydHVhbEtleSkge1xuICAgICAgICB2aXJ0dWFsS2V5LmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdrZXlfX2NvbnRhaW5lcl9jbGlja2VkJylcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdDYXBzTG9jaycpIHtcbiAgICAgICAgICB2aXJ0dWFsS2V5LmNvbnRhaW5lci5jbGljaygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGV2ZW50LmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgICAgICAgIGlmICh0aGlzLmlzQ2Fwcykge1xuICAgICAgICAgICAgdGhpcy5vblZpcnR1YWxLZXkoZmFsc2UsIHZpcnR1YWxLZXkub2JqKVxuICAgICAgICAgIH0gZWxzZSB0aGlzLm9uVmlydHVhbEtleSh0cnVlLCB2aXJ0dWFsS2V5Lm9iailcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VMYW5nKCkge1xuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbmcnKSB7XG4gICAgICB0aGlzLmxhbmcgPSAnaHInXG4gICAgfSBlbHNlIHRoaXMubGFuZyA9ICdlbmcnXG4gICAgdGhpcy5mb290ZXIub25MYW5nQ2hhbmdlKHRoaXMubGFuZylcbiAgICB0aGlzLmtleWJvYXJkLmNoYW5nZU5hbWVzKHRoaXMuaXNDYXBzLCB0aGlzLmxhbmcpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLmxhbmcpXG4gIH1cblxuICBvblZpcnR1YWxLZXkoaXNDYXBzLCBvYmopIHtcbiAgICBpZiAoaXNDYXBzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNDYXBzID0gaXNDYXBzXG4gICAgICB0aGlzLmtleWJvYXJkLmNoYW5nZU5hbWVzKHRoaXMuaXNDYXBzLCB0aGlzLmxhbmcpXG4gICAgfVxuICAgIHRoaXMudGV4dGFyZWEuYWRkQ2hhcihvYmosIHRoaXMuaXNDYXBzLCB0aGlzLmxhbmcpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsImNvbnN0cnVjdG9yIiwidGhpcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiY3Vyc29yIiwic2VsZWN0aW9uU3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkQ2hhciIsImtleUluZm8iLCJpc0NhcHMiLCJsYW5nIiwia2V5Iiwib25TaGlmdCIsImxhbmdPblNoaWZ0IiwibGFuZCIsInZhbHVlIiwic2xpY2UiLCJjb2RlIiwic2V0Q3Vyc29yVXAiLCJzZXRDdXJzb3JEb3duIiwic2V0Rm9jdXMiLCJtb3ZlQ3Vyc29yIiwibGluZVN0YXJ0IiwibGFzdEluZGV4T2YiLCJnYXAiLCJsZW5ndGgiLCJwcmV2TGluZVN0YXJ0IiwicHJldkxpbmVMZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm5leHRMaW5lU3RhcnQiLCJpbmRleE9mIiwiYWZ0ZXJOZXh0TGluZSIsIm5leHRMaW5lTGVuZ3RoIiwiZm9jdXMiLCJzZWxlY3Rpb25FbmQiLCJzaWRlIiwiS2V5Iiwia2V5T2JqIiwib2JqIiwiZmFjZSIsInRleHQiLCJ0eXBlIiwidGV4dENvbnRlbnQiLCJ1bmRlZmluZWQiLCJuYW1lIiwic2l6ZSIsImlzQXJyb3ciLCJzZXRPbk1vZGUiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9nZ2xlIiwiS2V5Ym9hcmQiLCJjaGFyS2V5c0FyciIsImtleXNBcnIiLCJlIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGFuZ2VOYW1lcyIsImZvckVhY2giLCJIaW50cyIsInRpdGxlIiwibGlzdCIsImNyZWF0ZUxpc3RJdGVtIiwiZmlyc3RUZXh0Iiwic2Vjb25kVGV4dCIsIml0ZW0iLCJzcGFuIiwicHJlcGVuZCIsIkhlYWRlciIsIm5vdGUiLCJoaW50cyIsImNvdmVyIiwiRm9vdGVyIiwiZW5nIiwiY3JvYXQiLCJwcmV2TGFuZyIsImRhdGUiLCJvbkxhbmdDaGFuZ2UiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImFwcCIsImhlYWRlciIsImZvb3RlciIsInRleHRhcmVhIiwia2V5Ym9hcmQiLCJvblZpcnR1YWxLZXkiLCJ2aXJ0dWFsS2V5IiwiZmluZCIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUxhbmciLCJjbGljayIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9
