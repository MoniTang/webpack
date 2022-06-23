import x from "./x.js"
import image from './assets/1.png'
console.log(image)
const div = document.getElementById('app')

div.innerHTML = `
<img src="${image}">
`