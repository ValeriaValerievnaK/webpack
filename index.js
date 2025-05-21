import "./index.css";
import MY_IMAGE from './assets/images.png'


console.log('Hello World!');

const perentDiv = document.createElement("div");
perentDiv.className = "conteiner"

const title = document.createElement("h1");
title.textContent = "I love JavaScript"

const image = document.createElement("img");
image.src = MY_IMAGE

const body = document.querySelector("body")

body.append(perentDiv)
perentDiv.append(title)
perentDiv.append(image)