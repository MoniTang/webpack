import x from "./x.js"
import image from './assets/1.png'
const div = document.getElementById('app')

div.innerHTML = `
<img src="${image}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}
div.appendChild(button)
