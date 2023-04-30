import "./style.scss";
import { Key } from "../key";

export class Keyboard {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("keyboard__container");
    const key = new Key("S");
    const keyTwo = new Key("U");
    const keyThree = new Key("R");
    this.container.append(key.container, keyTwo.container, keyThree.container);
  }
}
