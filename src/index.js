import "./style.scss";
import { App } from "./app.js";

const root = document.querySelector("body");
const app = new App();
root.append(app.container);
