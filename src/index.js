import './style.scss'
import App from './app'

const root = document.querySelector('body')
const app = new App()
root.append(app.container)
