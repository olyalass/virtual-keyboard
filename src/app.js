import "./style.scss";
import { Textarea } from "./components/textarea";
import { Keyboard } from "./components/keyboard";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export class App {
  container;
  isCaps;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("app");

    const header = new Header();
    const footer = new Footer();

    const textarea = new Textarea();
    const keyboard = new Keyboard();

    this.container.append(
      header.item,
      textarea.container,
      keyboard.container,
      footer.item
    );

    this.container.addEventListener("custom-key", (e) => {
      if (e.detail.isCaps !== undefined) {
        this.isCaps = e.detail.isCaps;
      }
      textarea.addChar(e.detail.obj, this.isCaps);
    });
  }
}
